import { AddInput } from '../../components/input/add/add';
import styles from './home.module.scss';

export const Home = () => {

    return <main className={styles.main}>
        <section className={styles.container_todo}>
            <div className={styles.switch}>
                <AddInput/>
            </div>
        </section>
    </main>

}