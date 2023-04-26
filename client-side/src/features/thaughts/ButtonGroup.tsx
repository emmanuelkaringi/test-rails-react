import { destroyThaughtAsync} from './thaughtSlice'

function ButtonGroup(props:any) {

    function handleClick(e:any) {
        const payload = {
            thaught: {
                thaught_id: props.thaught_id
            }
        }
        props.dispatch(destroyThaughtAsync(payload));
    }
  return <div className="btn-group float-end">
      <button 
        className="btn btn-warning"
        onClick={() => props.toggleEditForm()}>Edit</button>
      <button 
      className="btn btn-danger" 
      onClick={(e) => handleClick(e)}>Delete</button>
  </div>;
}

export default ButtonGroup;