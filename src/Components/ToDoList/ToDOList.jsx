import ToDO from "../ToDo/ToDO";
import "./ToDoList.css";
import { useContext } from "react";
import ToDoContext from "../../Context/ToDoContext";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";

function ToDOList() {
  // state of the list imported using context api's
  const { list } = useContext(ToDoContext);

  // dispatch function from the useReducer hook
  const { dispatch } = useContext(ToDoDispatchContext);

  // function for assigning the change to the checkbox
  const changeFinishedFun = (newStatus, t) => {
    dispatch({
      type: "changeFinished",
      payload: { newStatus: newStatus, t: t },
    });
  };

  // function for deleting the todo from the todo list
  const onDeleteFun = (t) => {
    dispatch({ type: "onDelete", payload: { t: t } });
  };

  // function for updating the todo in the list
  const onSaveFun = (todo, newText) => {
    dispatch({ type: "onSave", payload: { t: todo, newData: newText } });
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
          onDelete={() => onDeleteFun(t)}
          onSave={(changedData) => onSaveFun(t, changedData)}
        />
      ))}
    </div>
  );
}

export default ToDOList;
