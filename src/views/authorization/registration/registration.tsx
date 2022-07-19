import { PasswordInput } from "../../../components/input/password/password";
import { Switch } from "../../../components/switch/switch";
import styles from "../authorization.module.scss";
import { useForm } from "../../../hooks/useForm";
import { useEffect } from "react";

export const Registration = () => {
    
    const { data, values, onChange, handlerForm } = useForm("regist");

    useEffect(() => {},[values, data]);

    return <main className={styles.main}>
        <section className={styles.section}>
            <Switch/>
            <form onSubmit={handlerForm} className={styles.form}>
                <div className={styles.authorization_container}>
                    <input placeholder="login" className={styles.input} type="text" onChange={onChange} value={values.login} name="login"/>
                    <PasswordInput value={values.password} onChange={onChange} />
                </div>
                <button type="submit" className={styles.button}>registration</button>
            </form>
            {data && data.message && <p className={styles.message}>{data.message}</p>}
            {data && data.error && <p className={styles.error}>{data.error}</p>}
        </section>
    </main>

}