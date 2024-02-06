import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  intVal: [],
  addNewItem: () => {},
  deleteItem:() => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if(action.type === 'ADD_ITEM'){
    newTodoItems = [
      ...currTodoItems, {
        name: action.payload.itemName , date: action.payload.dueDate
      },
    ];
  }else if(action.type === 'DELETE_ITEM'){
    newTodoItems = currTodoItems.filter((item)=> item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({children}) =>{
  const [intVal, dispatchIntVal] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName , dueDate) =>{
    const newItemAction = {
      type: 'ADD_ITEM',
      payload:{
        itemName,
        dueDate
      }
    };
    dispatchIntVal(newItemAction);
  }

  const deleteItem = (todoItemName) =>{
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload:{
        itemName: todoItemName,
      }
    };
    dispatchIntVal(deleteItemAction);
  }
  return <TodoItemsContext.Provider
    value={{
      intVal,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;