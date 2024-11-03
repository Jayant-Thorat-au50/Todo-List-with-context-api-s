import ToDOList from "./Components/ToDoList/ToDOList";
import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import ToDoContext from "./Context/ToDoContext";
import { useReducer } from "react";
import ToDoReducer from "./Reducer/ToDoReducer";
import ToDoDispatchContext from "./Context/ToDoDispatchContext";

function App() {
  // const [list, setList] = useState([]);
  const [list, dispatch] = useReducer(ToDoReducer, []);

  return (
    <ToDoContext.Provider value={{ list }}>
      <ToDoDispatchContext.Provider value={{ dispatch }}>
        <section className=" container-fluid">
          <section className=" row">
            <section className="col-12  border border-2 border-danger d-flex justify-content-center align-items-center addToDO  ">
              {/* getting the data of the single todo in the list */}
              <AddToDo />
            </section>
            {/* the list of the todos  */}
            <ToDOList />
          </section>
        </section>
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  );
}

export default App;
