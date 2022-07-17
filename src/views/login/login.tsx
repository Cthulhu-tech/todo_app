import { PasswordInput } from "../../components/input/password";
import { LoginInput } from "../../components/input/login";
import { NavLink } from "react-router-dom";
import styles from "./login.module.scss";

export const Login = () => {

    return <main className={styles.main}>
        <section className={styles.section}>
            <div className={styles.container}>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/registration">registration</NavLink>
            </div>
            <div className={styles.password_container}>
                <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
                    <LoginInput />
                    <PasswordInput />
                </form>
                <button type="submit"></button>
            </div>
        </section>
    </main>

}