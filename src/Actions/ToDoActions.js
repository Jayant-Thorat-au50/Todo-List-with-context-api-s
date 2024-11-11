
export const ADD_TODO = (inputText)=>({ type: "add_ToDo", payload: { toDo: inputText } });
export const CHANGE_STATUS = (newStatus, t) => ({
    type: "changeFinished",
    payload: { newStatus: newStatus, t: t },});

export const DEL_TODO =  (t) => ({ type: "onDelete", payload: { t: t } });

export const EDIT_TODO = (todo, newText) => ({
    type: "onSave",
    payload: { t: todo, newData: newText },
  });