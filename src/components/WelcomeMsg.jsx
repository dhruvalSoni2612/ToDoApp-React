import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";


const WelcomeMsg = () => {

  const {intVal} = useContext(TodoItemsContext);

  return <>{intVal.length === 0 && <p>List is Empty</p>}</>
}
export default WelcomeMsg;