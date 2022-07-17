import { Action, JwtType } from "../../interface/redux"

const defaultState = {

    user: {

        login: null,
        jwt: null,

    }

}

export const JWT = (state = defaultState, action:Action<string, JwtType>) => {
    switch (action.type){
        case "update": 
            return {...state, ...action.payload}
        case "delete":
            return {...state, ...{user: null, jwt: null}}
        default:
            return state;
    }
}

export const updateToken = (payload: JwtType) => ({ type: "update", payload });
