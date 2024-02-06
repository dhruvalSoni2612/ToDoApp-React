
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem"
const TodoItems = () => {

  const {intVal} = useContext(TodoItemsContext);


 
  return <>
  {
    intVal.map((item) => (<TodoItem key= {item.name} tododate={item.date} todoname = {item.name}></TodoItem>))
  }
  </>
} 
export default TodoItems;
