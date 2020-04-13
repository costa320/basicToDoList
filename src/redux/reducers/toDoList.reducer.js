const ToDoListReducer = (
  state = {
    toDoList: [
      {
        id: 1,
        name: "1",
        description: "buy 1 apple",
        done: false,
      },
      {
        id: 2,
        name: "2",
        description: "buy 1 apple",
        done: false,
      },
      {
        id: 3,
        name: "3",
        description: "buy 1 apple",
        done: false,
      },
      {
        id: 4,
        name: "4",
        description: "buy 1 apple",
        done: false,
      },
    ],
  },
  action
) => {
  let index = undefined;
  let updatedTodoList = undefined;
  switch (action.type) {
    case "ADD_NEW_ITEM":
      /* give me all the properties of state  => ...state */

      state = {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };
      break;

    case "DELETE_ITEM":
      /* give me all the properties of state  => ...state */

      index = state.toDoList.findIndex((elem) => elem.id === action.payload);

      if (index !== undefined) {
        updatedTodoList = state.toDoList;
        updatedTodoList.splice(index, 1);
        state = {
          ...state,
          toDoList: updatedTodoList,
        };
      }
      break;

    case "UPDATE_ITEM":
      /* give me all the properties of state  => ...state */
      updatedTodoList = state.toDoList;
      index = updatedTodoList.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (index !== undefined) {
        updatedTodoList[index] = action.payload.item;
        state = {
          ...state,
          toDoList: updatedTodoList,
        };
      }
      break;
  }
  return state;
};

export default ToDoListReducer;
