import { ReduxStore } from "../../../interface/redux";
import { HandlerTodo } from "../handler/handler";
import { useSelector } from "react-redux";
import styles from "../todo.module.scss";

export const Completed = () => {

    const completed = useSelector((store: ReduxStore) => store.todo.userData.todo_completed);

    if(completed?.length === 0) return <p className={styles.paragraph_message}>Empty</p>

    return <>
        {completed?.map((todo, idx) => {

            return <article className={styles.article} key={idx}><HandlerTodo {...todo}/></article>

        })}
    </>

}