import { Action, UserDataType } from "../../interface/redux";
import { updateTodoAsync } from "../store/todo";
import { Dispatch } from "redux";

export const FetchDataTodo = (token: string | null = '') => {

    return (dispatch: Dispatch<Action<string, UserDataType[]>>) => {

        fetch(process.env.REACT_APP_SERVER + "api/get",
            {
                method: 'GET',
                headers: {
    
                    'Authorization': `Bearer ${token}`
    
                }
            })
            .then((response) => {

                return response.json();

            })
            .then((json) => {

                dispatch(updateTodoAsync(json));

            });

    }

}