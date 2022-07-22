import { Action, TodoType, UserDataType } from "../../interface/redux";

const defaultState:UserDataType = {

    userData: {

        todo_pendings: null,

        todo_completed: null,

    }

}

const addTodo = "addTodonew";
const updateTodo = "update";
const deleteTodoPending = "deletePendings";
const deleteTodoCompleted = "deleteCompleted";

const uncompletedTodoCompleted = "unCompletedTodo";
const completedTodoPendings = "completedTodo";

export const Todo = (state = defaultState, action:Action<string, UserDataType | TodoType[] | number>) => {
    switch (action.type){
        case addTodo:
            return {...state, userData: {todo_pendings: [...(state.userData.todo_pendings as TodoType[]), ...(action.payload as TodoType[])], todo_completed: state.userData.todo_completed}};
        case updateTodo:
            return {...state, userData: {todo_pendings: (action.payload as UserDataType).userData.todo_pendings, todo_completed: (action.payload as UserDataType).userData.todo_completed}};
        case deleteTodoPending:
            return {userData: {todo_pendings: (state.userData.todo_pendings as TodoType[]).filter((todo) => todo.id !== (action.payload as number)), todo_completed: state.userData.todo_completed}};
        case deleteTodoCompleted:
            return {userData: {todo_completed: (state.userData.todo_completed as TodoType[]).filter((todo) => todo.id !== (action.payload as number)), todo_pendings: state.userData.todo_pendings}};
        case uncompletedTodoCompleted:
            const unComplete = (state.userData.todo_completed as TodoType[]).filter((todo) => todo.id === (action.payload as number));
            unComplete[0].completed = 0;
        return {userData: {todo_pendings: [...unComplete, ...(state.userData.todo_pendings as TodoType[])], todo_completed: (state.userData.todo_completed as TodoType[]).filter((todo) => todo.id !== (action.payload as number))}};
       case completedTodoPendings:
            const complete = (state.userData.todo_pendings as TodoType[]).filter((todo) => todo.id === (action.payload as number));
            complete[0].completed = 1;
            return {userData: {todo_completed: [...complete, ...(state.userData.todo_completed as TodoType[])], todo_pendings: (state.userData.todo_pendings as TodoType[]).filter((todo) => todo.id !== (action.payload as number))}};
        default:
            return state;
    }
}

export const addTodoSync = (payload: TodoType[]) => ({ type: addTodo, payload });
export const updateTodoAsync = (payload: UserDataType[]) => ({ type: updateTodo, payload });
export const deletePending = (payload: number) => ({ type: deleteTodoPending, payload });
export const deleteCompleted = (payload: number) => ({ type: deleteTodoCompleted, payload });
export const completePending = (payload: number) => ({ type: completedTodoPendings, payload });
export const uncompleteCompleted = (payload: number) => ({ type: uncompletedTodoCompleted, payload });
