import ToDO from "../ToDo/ToDO";
import "./ToDoList.css";
import { useContext } from "react";
import ToDoContext from "../../Context/ToDoContext";

function ToDOList() {
  // state of the list imported using context api's
  const { list, setList } = useContext(ToDoContext);

  // function for assigning the change to the checkbox
  const changeFinishedFun = (newStatus, t) => {
    const toDoWithUpdatedStatus = list.map((todoToBeUpdated) => {
      if (todoToBeUpdated.id == t.id) {
        t.isFinished = newStatus;
      }
      return todoToBeUpdated;
    });
    setList(toDoWithUpdatedStatus);
  };

  // function for deleting the todo from the todo list
  const onDeleteFun = (t) => {
    const listAfterDeleting = list.filter(
      (todoToBedeleted) => t.id != todoToBedeleted.id
    );

    setList(listAfterDeleting);
  };

  // function for updating the todo in the list
  const onSaveFun = (t, newData) => {
    t.name = newData;
  };

  // here is the ui of the list that can have multiple todos
  return (
    <div className=" col-12 toDoList">
      {list.map((t) => (
        <ToDO
          key={t.id}
          todoData={t.name}
          id={t.id}
          changeFinished={(newStatus) => changeFinishedFun(newStatus, t)}
          onDelete={() => onDeleteFun(t)}
          onSave={(newData) => onSaveFun(t, newData)}
        />
      ))}
    </div>
  );
}

export default ToDOList;
