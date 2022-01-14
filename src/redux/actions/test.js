import { SET_TEST } from "../types";

export const test = () => async (dispatch, getState) => {
  dispatch({
    type: SET_TEST,
    payload: true
  })
}