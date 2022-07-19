import styles from "./loading.module.scss";

export const Loading = () => {

    return <section className={styles.container_loading}>
        <div className={styles.spiner}></div>
    </section>

}