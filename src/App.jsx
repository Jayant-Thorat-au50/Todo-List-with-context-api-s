import ToDOList from "./Components/ToDoList/ToDOList";
import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import { useDispatch } from "react-redux";
import {ADD_TODO,DEL_TODO,EDIT_TODO,CHANGE_STATUS} from "./Actions/ToDoActions";
import { bindActionCreators } from "redux";


function App() {

  const dispatch = useDispatch()

  const actions = bindActionCreators({ADD_TODO,DEL_TODO,EDIT_TODO,CHANGE_STATUS}, dispatch)
  
  return (
    <section className=" container-fluid">
      <section className=" row">
        <section className="col-12  border border-2 border-danger d-flex justify-content-center align-items-center addToDO  ">
          {/* getting the data of the single todo in the list */}
          <AddToDo ADD_TODO =  {actions.ADD_TODO}/>
        </section>
        {/* the list of the todos  */}
        <ToDOList 
        EDIT_TODO = {actions.EDIT_TODO}
        DEL_TODO = {actions.DEL_TODO } 
        CHANGE_STATUS ={ actions.CHANGE_STATUS}
         />
      </section>
    </section>
  );
}

export default App;
