import { addTodoSync } from "../../../redux/store/todo";
import { Timestamp } from "../../../utils/timetampAdd";
import { ReduxStore } from "../../../interface/redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "./add.module.scss";

export const AddInput = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({text: ''});
    const jwt = useSelector((store: ReduxStore) => store.jwt.user.jwt);

    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => setInput({...input, text: event.target.value});

    const addTodo = () => {

        fetch(process.env.REACT_APP_SERVER + 'api/add', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            
            body: JSON.stringify(input)

        }).then(() => {

            dispatch(addTodoSync([{id: Math.random(), user_id: 0, todo_time_start: Timestamp(), todo_text: input.text, completed: 0}]));

        });

    }

    useEffect(() => {},[input]);

    return  <div className={styles.container_input}>
            <div className={styles["sub-input_container"]}>
                <input onChange={handlerInput} className={styles.input_add} name="text" value={input.text} placeholder="Add new task"/>
            </div>
            <div className={styles["sub-input_container"]}>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>All</NavLink>
                <NavLink to="/pending" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>Pending</NavLink>
                <NavLink to="/completed" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>Completed</NavLink>
                <button className={styles.btn_add} onClick={addTodo}>Add</button>
            </div>
        </div>

}