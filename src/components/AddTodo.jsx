import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import { useRef } from "react";
import { PiNotepadDuotone } from "react-icons/pi";

function AddTodo(){

  const {addNewItem} = useContext(TodoItemsContext);

  const todoItemElement = useRef();
  const dueDateElement = useRef();


  const handelAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoItemElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoItemElement.current.value = "";
    dueDateElement.current.value= "";
    addNewItem(todoName,dueDate);
  }


  return <div className="container text-center">
  <form className="row" onSubmit={handelAddButtonClick}>
    <div className="col-6">
      <input type="text" placeholder='Enter ToDo Here' ref={todoItemElement	}/>
    </div>
    <div className="col-4">
      <input type="date" ref={dueDateElement}/>
    </div>

    <div className="col-2">  
      <button className="btn btn-success">
        <PiNotepadDuotone />
      </button>
    </div>
  </form>
  </div>
}

export default AddTodo;