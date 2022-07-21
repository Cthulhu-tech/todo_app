import { ReduxStore } from "../../../interface/redux";
import { HandlerTodo } from "../handler/handler";
import { useSelector } from "react-redux";
import styles from "../todo.module.scss";

export const All = () => {

    const allTodo = useSelector((store: ReduxStore) => store.todo.userData);

    return <>
        {allTodo.todo_completed?.map((todo, idx) => {

            return <article className={styles.article} key={idx}><HandlerTodo {...todo}/></article>

        })}
        {allTodo.todo_pendings?.map((todo, idx) => {

            return <article className={styles.article} key={idx}><HandlerTodo {...todo}/></article>

        })}
    </>

}