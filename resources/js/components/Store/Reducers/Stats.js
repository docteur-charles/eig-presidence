import { SET_STATS } from "../Actions";

let initialState = JSON.parse(localStorage.getItem("stats")) || null;

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_STATS: {
            return action.data;
        }
        default: {
            return state;
        }
    }
}
