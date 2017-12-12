let defaultState = {
  color: "red"
}

const mainReducer = (state = defaultState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return {
      ...state,
      color: action.color
    }
  } else {
    return state;
  }
}

export default mainReducer;

/* --> switch statement syntax 

const { type: payload } = action;

switch (type) {
  case "CHANGE_COLOR": {
    return {
      // unpacking state
      ...state,
      // change color to color passed from the Action method 
      color: action.color
    }
  }
  default: {
    return state;
  }
}
}

*/