import { Navigate, Outlet, useLocation } from "react-router";
import { updateToken } from "../../redux/store/jwt";
import { ReduxStore } from "../../interface/redux";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../../views/error/error";
import { Loading } from "../loading/loading";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const CheckCookie = (props: { children: React.ReactNode }) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const {load, data, error} = useFetch('refresh');
    const jwt = useSelector((state:ReduxStore) => state.jwt);

    useEffect(() => {
        
        if(data?.auth && data.login && data.accesstoken){

            dispatch(updateToken({user: {

                login: data.login,
                jwt: data.accesstoken,
        
            }}));

        }

    },[load, data, jwt])

    if(load) return <Loading/>
    if(error) return <Error error={error}/>
    if(data.error) return <Error error={data.error}/>
    if(jwt.user.jwt !== null) return <>{props.children}</>
    if(location.pathname !== '/login' && location.pathname !== '/registration') return <Navigate to="/login" replace={true} />

    return <Outlet/>

}
