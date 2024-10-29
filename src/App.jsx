import ToDOList from "./Components/ToDoList/ToDOList";
import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import ToDoContext from "./Context/ToDoContext";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  return (
    <ToDoContext.Provider value={{ list, setList }}>
      <section className=" container-fluid">
        <section className=" row">
          <section className="col-12  border border-2 border-danger d-flex justify-content-center align-items-center addToDO  ">
            <AddToDo
              updateList={(toDo) =>
                setList([
                  ...list,
                  { id: list.length + 1, name: toDo, isFinished: false },
                ])
              }
            />
          </section>
          <ToDOList />
        </section>
      </section>
    </ToDoContext.Provider>
  );
}

export default App;
