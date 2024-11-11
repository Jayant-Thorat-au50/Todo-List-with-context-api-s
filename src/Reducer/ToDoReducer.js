



function ToDoReducer(state=[], action) {


  //add todo

  if (action.type == "add_ToDo") {
    let toDo = action.payload.toDo;
    return [...state, { id: state.length + 1, name: toDo, isFinished: false }];

    // change the status of the todo
  } else if (action.type == "changeFinished") {
    const t = action.payload.t;
    const newStatus = action.payload.newStatus;
    const toDoWithUpdatedStatus = state.map((todoToBeUpdated) => {
      if (todoToBeUpdated.id == t.id) {
        t.isFinished = newStatus;
      }
      return todoToBeUpdated;
    });
    return toDoWithUpdatedStatus;

    // delete todo
  } else if (action.type == "onDelete") {
    const tId = action.payload.t;
    const listAfterDeleting = state.filter(
      (todoToBedeleted) => tId != todoToBedeleted.id
    );

    return listAfterDeleting;

    // save the changes in the data of the todo
  } else if (action.type == "onSave") {
    const todo = action.payload.t;
    const newData = action.payload.newData;

    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        todo.name = newData;
      }
      return t;
    });
    return updatedList;
  }else return state
}

export default ToDoReducer;
