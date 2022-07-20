import { ReduxStore } from '../../interface/redux';
import styles from './navigation.module.scss';
import { useSelector } from 'react-redux';

export const Navigation = () => {

    const user = useSelector((store: ReduxStore) => store.jwt.user.login);

    return <nav className={styles.navigation}>
        <p className={styles.paragraph}>{user && "user: " + user}</p>
    </nav>

}