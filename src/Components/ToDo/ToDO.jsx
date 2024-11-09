import React, { useContext, useState } from "react";
import "./ToDo.css";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";
function ToDO({ todoData, status, changeFinished, onDelete, onSave }) {
  // setting the states of the todo
  const [todoState, setTodoState] = useState({
    finished: status,
    isEditing: false,
    dataToShow: todoData,
  });



  // here is the ui of the single todo
  return (
    <div className=" d-flex border border-1 border-dark  m-2 fs-2 justify-content-center align-items-center col-6 p-1 ">
      {/* checkbox whoose status can be changed  */}
      <input
        type="checkbox"
        className="fs-2 isFinishedCheck col-1"
        checked={todoState.finished}
        onChange={e => {
          setTodoState((state) => ({
            ...state,
            finished: e.target.checked,
          }));
          changeFinished(e.target.checked);
        }}
      />

      {/* the field where todo data is dispalyed  */}
      <div className=" text-dark col-7 d-flex justify-content-center todoData align-items-center">
        {/* editing mode */}
        {todoState.isEditing ? (
          <input
            value={todoState.dataToShow}
            onChange={(e) =>
              setTodoState((state) => ({
                ...state,
                dataToShow: e.target.value,
              }))
            }
            className=" text-center"
          />
        ) : (
          // Non-editing mode
          <span className=" text-center">{todoState.dataToShow}</span>
        )}
      </div>
      <div className=" col-4 d-flex gap-2 justify-content-center ">
        {/* edit or save button */}
        <button
          className="btn p-0 bg-info col-5 fs-3"
          onClick={() => {
            setTodoState((state) => ({
              ...state,
              isEditing: !state.isEditing,
            }));

            onSave(todoState.dataToShow);
          }}
        >
          {todoState.isEditing ? "save" : "Edit"}
        </button>
        {/* delete button for deleting the todos */}
        <button className="btn p-0 bg-info fs-3  col-5 " onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
}

export default ToDO;
