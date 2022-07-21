import { dateFormeter } from "../../../utils/dataformater";
import { TodoType } from "../../../interface/redux";
import styles from "../todo.module.scss";

export const HandlerTodo = (data: TodoType) => {

    return <div className={styles.todo_container}>
            <div className={styles.button}>{data.completed === 0 ? "" : "✓"}</div>
            <p className={styles.paragraph_time}>{dateFormeter(data.todo_time_start)}</p>
            <p className={styles.paragraph_text}>{data.todo_text}</p>
            <p className={styles.paragraph_close}>✕</p>
        </div>

}