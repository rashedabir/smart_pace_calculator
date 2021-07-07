import { REMOVE_SPACE, SET_PACE } from "../contexts/paceContext";

export const setPaceActionData = (data) => {
  return {
    type: SET_PACE,
    payload: {
      list: data,
    },
  };
};

export const deleteSpaceAction = (id) => {
  return {
    type: REMOVE_SPACE,
    id,
  };
};
