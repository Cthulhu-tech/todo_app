import { FetchDataTodo } from '../../redux/async/todoLoad';
import { AddInput } from '../../components/input/add/add';
import { ReduxStore } from '../../interface/redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './home.module.scss';
import { Outlet } from 'react-router';
import { useEffect } from 'react';

export const Home = () => {

    const dispatch = useDispatch();
    const todo = useSelector((state:ReduxStore) => state);

    useEffect(() => {

        if(todo.todo.userData.todo_completed === null && todo.todo.userData.todo_pendings === null)
            dispatch(FetchDataTodo(todo.jwt.user.jwt) as any);

    }, [todo]);

    return <main className={styles.main}>
        <section className={styles.container_todo}>
            <div className={styles.switch}>
                <AddInput/>
            </div>
            <Outlet/>
        </section>
    </main>

}