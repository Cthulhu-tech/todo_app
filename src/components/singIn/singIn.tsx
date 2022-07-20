import styles from '../../layout/navigation/navigation.module.scss';
import { updateToken } from '../../redux/store/jwt';
import { ReduxStore } from '../../interface/redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const SingIn = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: ReduxStore) => store.jwt.user.login);

    const Lagout = () => {

        fetch(process.env.REACT_APP_SERVER + 'lagout', {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            credentials: "include",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(() => {

            dispatch(updateToken({user: {

                login: null,
                jwt: null,
        
            }}));

        });

    }

    useEffect(() => {}, []);

    return <>
        <p className={styles.paragraph}>{"user: " + user}</p>
        <p className={styles.paragraph + " " + styles.lagout} onClick={Lagout}>lagout</p>
    </>

}