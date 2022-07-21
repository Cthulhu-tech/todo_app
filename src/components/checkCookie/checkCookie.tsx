import { Navigate, useLocation, Outlet } from 'react-router';
import { updateToken } from "../../redux/store/jwt";
import { Error } from "../../views/error/error";
import { Loading } from "../loading/loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const CheckCookie = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [load, setLoad] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {

            fetch(process.env.REACT_APP_SERVER + 'refresh', {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                credentials: "include",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
            }).then((response) => {
    
                return response.json();
    
            }).then((json) => {
    
                setLoad(false);

                dispatch(updateToken({user: {

                    login: json.login,
                    jwt: json.accesstoken,
            
                }}));
    
            }).catch((err) => {
    
                setLoad(false);

                return setError(err);
    
            });

    }, []);

    if(load) return <Loading/>
    if(error) return <Error error={error}/>
    if(location.pathname !== '/login' && location.pathname !== '/registration') return <Navigate to="/login" replace={true} />

    return <Outlet/>

}
