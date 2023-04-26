import React, { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';

function Thaught(props:any) {
    const [title, setTitle] = useState(props.thaught.title);
    const [body, setBody] = useState(props.thaught.body);
    const [isEditing, setIsEditing] = useState(props.thaughtToEdit === props.thaught.id);
    useEffect(() => {
        setIsEditing(props.thaughtToEdit === props.thaught.id);
    }, [props.thaughtToEdit, props.thaught.id])

    function submitHandler(e:any) {
        e.preventDefault();
        const formData = {
          thaught: {
                id: props.thaught.id,
                title: title,
                body: body,
            }
        }
        props.submitEdit(formData)
        resetState();
    }

    function resetState() {
        setTitle(props.thaught.title);
        setBody(props.thaught.body);
    }

    const titleElement = <h2 className="title text-start">{props.thaught.title}</h2>;
    const bodyElement = <p className="card-text text-start">{props.thaught.body}</p>;
    const editableTitle = <input 
                            type="text" 
                            className="form-control text-start" 
                            value={title} 
                            onChange={(e) => setTitle(props.thaught.title)} />;
    const editableBody = <textarea 
                            className="form-control text-start"
                            value={body}
                            onChange={(e) => setBody(e.target.value)} />;
    const submitButton = <button
                            type="submit"
                            className="form-control"
                            onClick={(e) => submitHandler(e)}>Submit</button>;
  return <div>
      <div className="row">
          <div className="col-8">
              {isEditing ? editableTitle : titleElement}
          </div>
          <div className="col-4">
              <ButtonGroup 
                thaught_id={props.thaught.id}
                dispatch={props.dispatch}
                toggleEditForm={props.toggleEditForm}
                />

          </div>
      </div>
        <div className="row">
            <div className="col-8">
                {isEditing ? editableBody : bodyElement}
            </div>
        </div>
        <div className="row">
            <div className="col-2">
                {isEditing ? submitButton : ""}
            </div>
        </div>
  </div>;
}

export default Thaught