import { SET_VEIO_LIST } from "./../const/constant";

export const vedioReducer = (state = [], action) => {
  switch (action.type) {
    case SET_VEIO_LIST:
      console.log("SET_VEIO_LIST", action);

      return [...action.state];

    default:
      return state;
  }
};
