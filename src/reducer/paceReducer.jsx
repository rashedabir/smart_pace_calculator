import { REMOVE_SPACE, SET_PACE } from "../contexts/paceContext";

const initialState = {
  list: [],
};

export const paceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PACE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_SPACE:
      const newList = state.list.filter((elem) => elem.list.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
