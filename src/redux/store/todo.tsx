import { Action, TodoType, UserDataType } from "../../interface/redux"

const defaultState = {

    userData: {

        todo: [{
            id: null,
            date: null,
            description: null,
        }],

    }

}

export const Todo = (state = defaultState, action:Action<string, UserDataType | TodoType>) => {
    switch (action.type){
        case "update": 
            return {...state, ...action.payload}
        case "delete":
            return {...state.userData.todo.filter((todo) => todo.id !== (action.payload as TodoType).id)}
        default:
            return state;
    }
}