import { dateFormeter } from "../../../utils/dataformater";
import {completePending, deleteCompleted, uncompleteCompleted} from "../../../redux/store/todo";
import {deletePending} from "../../../redux/store/todo";
import { ReduxStore, TodoType } from "../../../interface/redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "../todo.module.scss";
import { FetchDataTodo } from "../../../utils/fetchData";

export const HandlerTodo = (data: TodoType) => {

    const dispatch = useDispatch();
    const jwt = useSelector((store: ReduxStore) => store.jwt.user.jwt);

    const deleteTodo = (_id:number, _completed: number) => {

        if(_completed === 0){

            FetchDataTodo("api/delete", _id, jwt)
                .then(() => {

                    dispatch(deletePending(_id));

                });

        }else{

            FetchDataTodo("api/delete", _id, jwt)
            .then(() => {

                dispatch(deleteCompleted(_id));

            });

        }

    }

    const completeTodo = (_id:number, _completed: number) => {

        if(_completed === 0){

            dispatch(completePending(_id));

        }else{

            dispatch(uncompleteCompleted(_id));

        }

    }

    return <div className={styles.todo_container}>
            <div className={styles.button} onClick={() => completeTodo(data.id, data.completed)}>{data.completed === 0 ? "" : "✓"}</div>
            <p className={styles.paragraph_time}>{dateFormeter(data.todo_time_start)}</p>
            <p className={styles.paragraph_text}>{data.todo_text}</p>
            <p onClick={() => deleteTodo(data.id, data.completed)} className={styles.paragraph_close}>✕</p>
        </div>

}