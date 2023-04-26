import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { produce } from "immer";
import { RootState } from "../../app/store"
import { fetchThaughts, createThaught, destroyThaught, updateThaught } from './thaughtAPI'

export enum Statuses {
    Initial = "Not Fetched",
    Loading = "Loading...",
    UpToDate = "Up To Date",
    Deleted = "Deleted",
    Error = "Error"
}

export interface ThaughtFormData {
    thaught: {
        id?: string;
        title: string;
        body: string;
    }
}

export interface ThaughtState {
    id?: number;
    title?: string;
    body?: string;
    created_at?: any;
    updated_at?: any;
}

export interface ThaughtsState {
    thaughts: ThaughtState[];
    status: string;
}

export interface ThaughtUpdateData {
    thaught_id: number;
    thaught: ThaughtState;
}

export interface ThaughtDeleteData {
    thaught: {
        thaught_id: number;
    }
}

const initialState: ThaughtsState = {
    thaughts: [
        {
            id: 0,
            title: "",
            body: "",
            created_at: "",
            updated_at: "",
        }
    ],
    status: Statuses.Initial
}

export const fetchThaughtsAsync = createAsyncThunk(
    'thaughts/fetchThaughts',
    async () => {
        const response = await fetchThaughts();
        return response;
    }
)

export const createThaughtAsync = createAsyncThunk(
    'thaughts/createThaught',
    async (payload: ThaughtFormData) => {
        const response = await createThaught(payload);

        return response;
    }
)
export const updateThaughtAsync = createAsyncThunk(
    'thaughts/updateThaught',
    async (payload: ThaughtFormData) => {
        const response = await updateThaught(payload);

        return response;
    }
)
export const destroyThaughtAsync = createAsyncThunk(
    'thaughts/destroyThaught',
    async (payload: ThaughtDeleteData) => {
        const response = await destroyThaught(payload);

        return response;
    }
)

export const thaughtSlice = createSlice({
    name: "thaughts",
    initialState,
    /**
     * Synchronous actions
     */
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchThaughtsAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(fetchThaughtsAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.thaughts = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(fetchThaughtsAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Update Section */
            .addCase(createThaughtAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(createThaughtAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.thaughts.push(action.payload);
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(createThaughtAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Destroy Section */
            .addCase(destroyThaughtAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(destroyThaughtAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.thaughts = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(destroyThaughtAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            /** Update Section */
            .addCase(updateThaughtAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(updateThaughtAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    const index = draftState.thaughts.findIndex(
                        thaught => thaught.id === action.payload.id
                    );
                    draftState.thaughts[index] = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(updateThaughtAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
    }
})

export const {} = thaughtSlice.actions;

export const selectThaughts = (state: RootState) => state.thaughts.thaughts;

export const selectStatus = (state: RootState) => state.thaughts.status;

export default thaughtSlice.reducer;