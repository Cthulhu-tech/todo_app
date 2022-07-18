import { NavLink } from "react-router-dom";
import styles from "./switch.module.scss";

export const Switch = () => {

    return  <div className={styles.container}>
        <NavLink className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link} to="/login">login</NavLink>
        <NavLink className={({isActive}) => isActive ? styles.active + ' ' + styles.link : styles.link} to="/registration">registration</NavLink>
    </div>

}