import { Action, TodoType, UserDataType } from "../../interface/redux";

const defaultState:UserDataType = {

    userData: {

        todo_pendings: null,

        todo_completed: null,

    }

}

const updateTodo = "update";
const deleteTodoPending = "deletePendings";
const deleteTodoCompleted = "deleteCompleted";

export const Todo = (state = defaultState, action:Action<string, UserDataType | TodoType>) => {
    console.log(action.payload)
    switch (action.type){
        case updateTodo:
            return {...state, userData: { todo_pendings: (action.payload as UserDataType).userData.todo_pendings, todo_completed: (action.payload as UserDataType).userData.todo_completed}}
        case deleteTodoPending:
            return {...state, todo_pendings: (state.userData.todo_pendings as TodoType[]).filter((todo) => todo.id !== (action.payload as TodoType).id)}
        case deleteTodoCompleted:
            return {...state, todo_completed: (state.userData.todo_completed as TodoType[]).filter((todo) => todo.id !== (action.payload as TodoType).id)}
        default:
            return state;
    }
}

export const updateTodoAsync = (payload: UserDataType[]) => ({ type: updateTodo, payload });
export const deletePending = (payload: TodoType[]) => ({ type: deleteTodoPending, payload });
export const deleteCompleted = (payload: TodoType[]) => ({ type: deleteTodoCompleted, payload });
