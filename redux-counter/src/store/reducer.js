const reducer = (state = initialState, action) => {
  // USING IF ELSE
  /* if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREASE") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "INCREASE_BY_VALUE") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === "DECREASE_BY_VALUE") {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      counter: 0,
    };
  }
  return state; */
  // USING SWITCH
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREASE_BY_VALUE":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "DECREASE_BY_VALUE":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
      };
  }
  return state;
};

const initialState = {
  counter: 0,
};

export default reducer;
