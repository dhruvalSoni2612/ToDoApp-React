import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import css from "./TodoItem.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
function TodoItem({todoname, tododate}){

  const {deleteItem} = useContext(TodoItemsContext);
  
  

  return <div className="container text-center">
    <div className="row">
    <div className="col-6" >{todoname}</div>
    <div className="col-4">{tododate}</div>
    <div className="col-2"><button type="button" className={`btn btn-danger ${css.btnStyle}`} onClick={()=> deleteItem(todoname)}><RiDeleteBin2Fill /></button></div>
  </div>
</div>
}
export default TodoItem;