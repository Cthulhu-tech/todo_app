import { NavLink } from "react-router-dom";
import styles from "./add.module.scss";

export const AddInput = () => {

    return <div className={styles.container_input}>
        <div className={styles["sub-input_container"]}>
            <input className={styles.input_add} placeholder="Add new task"/>
        </div>
        <div className={styles["sub-input_container"]}>
            <NavLink to="/" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>All</NavLink>
            <NavLink to="/pending" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>Pending</NavLink>
            <NavLink to="/completed" className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link}>Completed</NavLink>
            <button className={styles.btn_add}>Add</button>
        </div>
    </div>

}