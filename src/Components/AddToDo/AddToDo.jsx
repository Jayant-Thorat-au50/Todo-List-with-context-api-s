import React, { useContext } from "react";
import { useState } from "react";
import ToDoDispatchContext from "../../Context/ToDoDispatchContext";
function AddToDo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(ToDoDispatchContext);

  return (
    <div className=" col-12 d-flex justify-content-center">
      {/* getting the input data of the todo */}
      <input
        type="text"
        placeholder="enter next todo....."
        className=" text-center"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* button that updates the single todo in the list */}
      <button
        className="btn bg-success fw-bold border-dark border-2 mx-1"
        onClick={() => {
          if (inputText) {
            setInputText("");
            dispatch({ type: "add_ToDo", payload: { toDo: inputText } });
          } else alert("please enter a todo name");
        }}
      >
        add ToDo to the list
      </button>
    </div>
  );
}

export default AddToDo;
