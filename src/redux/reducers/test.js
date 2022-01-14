import { SET_TEST } from "../types";

const initialState = {
  test: false,
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST:
      return {
        ...state,
        test: action.payload
      };
    default:
      return { ...state };
  }
}

export default main;