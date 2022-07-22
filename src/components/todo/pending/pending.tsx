import { ReduxStore } from "../../../interface/redux";
import { HandlerTodo } from "../handler/handler";
import { useSelector } from "react-redux";
import styles from "../todo.module.scss";

export const Pending = () => {

    const pending = useSelector((store: ReduxStore) => store.todo.userData.todo_pendings);

    if(pending?.length === 0) return <p className={styles.paragraph_message}>Empty</p>

    return <>
        {pending?.map((todo, idx) => {

            return <article className={styles.article} key={idx}><HandlerTodo {...todo}/></article>

        })}
    </>


}