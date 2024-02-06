import AppName from "./components/AppName" 
import AddTodo from "./components/AddTodo"
import './App.css';
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContextProvider from "./store/todo-item-store";




function App() {  

return <TodoItemsContextProvider>
  <center className= "to-do-container" >
    <AppName/>
    <AddTodo />
    <WelcomeMsg></WelcomeMsg>
    <TodoItems></TodoItems>
  </center>
  </TodoItemsContextProvider>

}
export default App