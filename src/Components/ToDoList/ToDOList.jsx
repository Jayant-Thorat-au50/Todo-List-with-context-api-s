import ToDO from "../ToDo/ToDO";
import "./ToDoList.css";
// import { useContext } from "react";
// import ToDoContext from "../../Context/ToDoContext";
// import ToDoDispatchContext from "../../Context/ToDoDispatchContext";
import { useDispatch, useSelector } from "react-redux";

function ToDOList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ToDo);

  const changeFinished = (newStatus, t) => ({
    type: "changeFinished",
    payload: { newStatus: newStatus, t: t },
  });

  const deleteTodo = (t) => ({ type: "onDelete", payload: { t: t } });

  const saveTodo = (todo, newText) => ({
    type: "onSave",
    payload: { t: todo, newData: newText },
  });

  // function for assigning the change to the checkbox
  const changeFinishedFun = (newStatus, t) => {
    dispatch(changeFinished(newStatus, t));
  };

  // function for deleting the todo from the todo list
  const onDeleteFun = (t) => {
    dispatch(deleteTodo(t));
  };

  // function for updating the todo in the list
  const onSaveFun = (todo, newText) => {
    dispatch(saveTodo(todo, newText));
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
