import ToDO from "../ToDo/ToDO";
import "./ToDoList.css";
import { useSelector } from "react-redux";

function ToDOList({EDIT_TODO, DEL_TODO, CHANGE_STATUS}) {

  const list = useSelector((state) => state.ToDo);

  // function for assigning the change to the checkbox
  const changeFinishedFun = (newStatus, t) => {
    CHANGE_STATUS(newStatus,t)
  };

  // function for deleting the todo from the todo list
  const onDeleteFun = (t) => {
    DEL_TODO(t)
  };

  // function for updating the todo in the list
  const onSaveFun = (todo, newText) => {
    EDIT_TODO(todo,newText)
  };

  // here is the ui of the list that can have multiple todos
  return (
    <div className=" col-12 toDoList">
      {list.map((t) => (
        <ToDO
          key={t.id}
          todoData={t.name}
          status={false}
          changeFinished={(newStatus) => changeFinishedFun(newStatus, t)}
          onDelete={() => onDeleteFun(t.id)}
          onSave={(changedData) => onSaveFun(t, changedData)}
        />
      ))}
    </div>
  );
}

export default ToDOList;
