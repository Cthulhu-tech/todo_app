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

        todo: TodoType[],

    }
    
}

export type TodoType = {

    id: string | null,
    date: string | null,
    description: string | null,

}

export type ReduxStore = {

    jwt: JwtType,
    todo: TodoType

}