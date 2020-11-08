import { SET_AUTH } from "../Actions";

let initialState = localStorage.getItem('auth') || {};

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