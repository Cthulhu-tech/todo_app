import styles from '../../layout/navigation/navigation.module.scss';
import { updateToken } from '../../redux/store/jwt';
import { ReduxStore } from '../../interface/redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const SingIn = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: ReduxStore) => store.jwt.user.login);

    const {load, data, error, FetchData} = useFetch('POST');

    const Lagout = () =>  FetchData('lagout');

    

    useEffect(() => {

        if(data){

            dispatch(updateToken({user: {

                login: null,
                jwt: null,
        
            }}));

        }

    }, [load]);

    return <>
        <p className={styles.paragraph}>{"user: " + user}</p>
        <p className={styles.paragraph + " " + styles.lagout} onClick={Lagout}>lagout</p>
    </>

}