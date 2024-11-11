import React from "react";
import { useState } from "react";

function AddToDo({ADD_TODO}) {
  const [inputText, setInputText] = useState("");


  const addTodo = (inputText)=>({ type: "add_ToDo", payload: { toDo: inputText } })

  return (
    <div className=" col-12 d-flex justify-content-center">
      {/* getting the input data of the todo */}
      <input
        type="text"
        placeholder="enter next todo....."
        className=" text-center"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />

      {/* button that updates the single todo in the list */}
      <button
        className="btn bg-success fw-bold border-dark border-2 mx-1"
        onClick={() => {
          if (inputText) {
            setInputText("");
            ADD_TODO(inputText);
          } else alert("please enter a todo name");
        }}
      >
        add ToDo to the list
      </button>
    </div>
  );
}

export default AddToDo;
