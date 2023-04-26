import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/thaughts/counterSlice";
import thaughtsReducer from "../features/thaughts/thaughtSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    thaughts: thaughtsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;