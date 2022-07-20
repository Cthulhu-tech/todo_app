import { SingIn } from '../../components/singIn/singIn';
import { ReduxStore } from '../../interface/redux';
import styles from './navigation.module.scss';
import { useSelector } from 'react-redux';

export const Navigation = () => {

    const user = useSelector((store: ReduxStore) => store.jwt.user.login);
    
    return <nav className={styles.navigation}>
        {user && <SingIn/>}
    </nav>

}