import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {useAppSelector } from "../../app/hooks";
import Thaught from './Thaught';
import ThaughtForm from './ThaugtForm';
import { fetchThaughtsAsync, selectThaughts, selectStatus, Statuses, updateThaughtAsync } from './thaughtSlice';
import { AppDispatch } from '../../app/store';

function Thaughts() {
  const thaughts = useAppSelector(selectThaughts);
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch<AppDispatch>();

  const [thaughtToEdit, setThaughtToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchThaughtsAsync());
  }, [dispatch])

  function toggleEditForm(thaught_id?:number) {
      if (thaughtToEdit === thaught_id) {
          setThaughtToEdit(0);
      } else {
            setThaughtToEdit(thaught_id as number);
      }
  }

  function submitEdit(formData:any) {
      dispatch(updateThaughtAsync(formData));
      toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
      contents = <div className="card">
        <div className="card-body">
            <h3>{status}</h3>
            <ThaughtForm />
            {thaughts && thaughts.length > 0 && thaughts.map(thaught => {
                return <div key={thaught.id} style={{margin:"5em"}}>
                    <Thaught 
                        dispatch={dispatch}
                        thaught={thaught}
                        toggleEditForm={() => toggleEditForm(thaught.id)}
                        thaughtToEdit={thaughtToEdit}
                        submitEdit={submitEdit}
                    />
                </div>
            })}
            </div>
      </div>
  }

  return <div><h1>My Thaughts</h1>
        {contents}
  </div>
}

export default Thaughts