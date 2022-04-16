import { SET_ROLES } from "../Actions";

let initialState = JSON.parse(localStorage.getItem("roles")) || null;

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ROLES: {
            return action.data;
        }
        default: {
            return state;
        }
    }
}
