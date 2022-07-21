export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type JwtType = {

    user: {

        login: null | string,
        jwt: null | string,

    }

}

export type UserDataType = {

    userData: {

        todo_pendings: TodoType[] | null,
        todo_completed: TodoType[] | null,

    }
    
}

export type TodoType = {

    id: number
    user_id: number
    todo_time_start: string
    todo_time_end: string
    todo_text: string

}

export type ReduxStore = {

    jwt: JwtType,
    todo: UserDataType

}
