import { PasswordInput } from "../../../components/input/password/password";
import { Switch } from "../../../components/switch/switch";
import { updateToken } from "../../../redux/store/jwt";
import styles from "../authorization.module.scss";
import { useForm } from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const Login = () => {
    
    const dispatch = useDispatch();
    const { data, values, onChange, handlerForm } = useForm("login");

    useEffect(() => {

        if(data?.auth && data.login && data.accesstoken)
            dispatch(updateToken({user: {

                login: data.login,
                jwt: data.accesstoken,
        
            }}));

    },[values, data]);

    return <main className={styles.main}>
        <section className={styles.section}>
            <Switch/>
            <form onSubmit={handlerForm} className={styles.form}>
                <div className={styles.authorization_container}>
                    <input placeholder="login" className={styles.input} type="text" onChange={onChange} value={values.login} name="login"/>
                    <PasswordInput value={values.password} onChange={onChange} />
                </div>
                <button type="submit" className={styles.button}>login</button>
            </form>
            {data && data.message && <p className={styles.message}>{data.message}</p>}
            {data && data.error && <p className={styles.error}>{data.error}</p>}
        </section>
    </main>

}