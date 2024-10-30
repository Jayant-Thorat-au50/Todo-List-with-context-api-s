import React from "react";
import { useState } from "react";
function AddToDo({ updateList }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className=" col-12 d-flex justify-content-center">
      {/* getting the input data of the todo */}
      <input
        type="text"
        placeholder="enter next todo....."
      
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* button that updates the single todo in the list */}
      <button
        className="btn bg-success fw-bold border-dark border-2 mx-1"
        onClick={() => {
          if (inputText) {
            setInputText("");
            updateList(inputText);
          } else alert("please enter a todo name");
        }}
      >
        add ToDo
      </button>
    </div>
  );
}

export default AddToDo;
