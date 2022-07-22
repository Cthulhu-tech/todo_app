import {completePending, deleteCompleted, uncompleteCompleted} from "../../../redux/store/todo";
import { ReduxStore, TodoType } from "../../../interface/redux";
import { dateFormeter } from "../../../utils/dataformater";
import { FetchDataTodo } from "../../../utils/fetchData";
import {deletePending} from "../../../redux/store/todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "../todo.module.scss";
import { useState } from "react";

export const HandlerTodo = (data: TodoType) => {

    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);
    const jwt = useSelector((store: ReduxStore) => store.jwt.user.jwt);

    const deleteTodo = (_id:number, _completed: number) => {

        setLoad(true);

        if(_completed === 0){

            FetchDataTodo("api/delete", _id, jwt)
                .then(() => {

                    setLoad(false);

                    dispatch(deletePending(_id));

                });

        }else{

            FetchDataTodo("api/delete", _id, jwt)
            .then(() => {

                setLoad(false);

                dispatch(deleteCompleted(_id));

            });

        }

    }

    const completeTodo = (_id:number, _completed: number) => {

        setLoad(true);

        if(_completed === 0){

            FetchDataTodo("api/update", _id, jwt, "PUT")
            .then(() => {

                setLoad(false);

                dispatch(completePending(_id));

            });

        }else{

            FetchDataTodo("api/update", _id, jwt, "PUT")
            .then(() => {

                setLoad(false);
                
                dispatch(uncompleteCompleted(_id));

            });

        }

    }

    return <div className={styles.todo_container}>
            {load && <div className={styles.load}/>}
            <div className={styles.button} onClick={() => completeTodo(data.id, data.completed)}>{data.completed === 0 ? "" : "✓"}</div>
            <p className={styles.paragraph_time}>{dateFormeter(data.todo_time_start)}</p>
            <p className={styles.paragraph_text}>{data.todo_text}</p>
            <p onClick={() => deleteTodo(data.id, data.completed)} className={styles.paragraph_close}>✕</p>
        </div>

}