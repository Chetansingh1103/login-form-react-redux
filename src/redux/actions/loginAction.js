import { ONLOGIN } from "./actionTypes";

export function onLogin(user){
    return {
        type: ONLOGIN,
        payload: user
    }
}