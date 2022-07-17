import { NavLink } from "react-router-dom";
import styles from "./login.module.scss";

export const Login = () => {

    return <main>
        <section>
            <div>
                <NavLink to="/login" />
                <NavLink to="/registration" />
            </div>
        </section>
    </main>

}