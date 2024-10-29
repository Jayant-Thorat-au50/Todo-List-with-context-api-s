import React, { useState } from "react";
import "./ToDo.css";

function ToDO({ todoData, status,id,changeFinished,onDelete }) {
  const [finished, setFinished] = useState(status);
  const [isEditing, setIsEditing] = useState(false)
  const [dataToShow, setDataToShow] = useState(todoData)
  return (
    <div className=" d-flex border border-1 border-dark  m-2 fs-2 justify-content-center align-items-center col-6 p-1 ">

      <input
        type="checkbox"
        className="fs-2 isFinishedCheck col-1"
        checked={finished}
        onChange={(e) =>{ 
          setFinished(e.target.checked)
          changeFinished(e.target.checked)}
        }
      />
      <div className=" text-dark col-7 d-flex justify-content-center align-items-center">
        {(isEditing)? <input value={dataToShow} onChange={(e)=> setDataToShow(e.target.value)}/> : <span>{dataToShow}</span>}
      </div>
      <div className=" col-4 d-flex gap-2 justify-content-center ">
        <button className="btn p-0 bg-info col-5 fs-3"
        onClick={()=>{
          setIsEditing(!isEditing)
        }}>{(isEditing)? 'save': 'Edit'}</button>
        <button className="btn p-0 bg-info fs-3  col-5 "
        onClick={onDelete}
        >delete</button>
      </div>
    </div>
  );
}

export default ToDO;
