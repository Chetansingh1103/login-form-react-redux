import { ONLOGIN } from "../actions/actionTypes";

let initialState =  {};

function loginReducer(state=initialState,action){
    switch(action.type){
        case ONLOGIN:
            return action.payload;
        default:
            return state;
    }
}

export default loginReducer;