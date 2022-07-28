import { Navigate, useLocation, Outlet } from 'react-router';
import { updateToken } from "../../redux/store/jwt";
import { Error } from "../../views/error/error";
import { useFetch } from '../../hooks/useFetch';
import { Loading } from "../loading/loading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const CheckCookie = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const {load, data, error, FetchData} = useFetch('POST');

    useEffect(() => { FetchData('refresh'); },[]);
    useEffect(() => { 
        
        if(data && data.length > 0) {

            dispatch(updateToken({user: {

                login: data.login,
                jwt: data.accesstoken,
        
            }}));

        }

     }, [load]);

    if(load) return <Loading/>
    if(error) return <Error error={error}/>
    if(location.pathname !== '/login' && location.pathname !== '/registration') return <Navigate to="/login" replace={true} />

    return <Outlet/>

}
