import { SET_AUTH } from "../Actions";

let initialState = JSON.parse(localStorage.getItem("auth")) || null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};