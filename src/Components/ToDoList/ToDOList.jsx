import ToDO from "../ToDo/ToDO";
import "./ToDoList.css";
import { useContext } from "react";
import ToDoContext from "../../Context/ToDoContext";

function ToDOList() {
  const { list, setList } = useContext(ToDoContext);

  return (
    <div className=" col-12 toDoList">
      {list.map((t) => (
        <ToDO
          key={t.id}
          todoData={t.name}
          id={t.id}
          changeFinished={(newStatus) => {
            const toDoWithUpdatedStatus = list.map((todoToBeUpdated) => {
              if (todoToBeUpdated.id == t.id) {
                t.isFinished = newStatus;
              }
              return todoToBeUpdated;
            });
            setList(toDoWithUpdatedStatus);
          }}
          onDelete={()=>{
            const listAfterDeleting = list.filter(todoToBedeleted => t.id != todoToBedeleted.id)

              setList(listAfterDeleting)
            }
          }
        />
      ))}
    </div>
  );
}

export default ToDOList;
