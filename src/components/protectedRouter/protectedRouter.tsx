import { Navigate, Outlet, useLocation } from "react-router";
import { CheckCookie } from "../checkCookie/checkCookie";
import { ReduxStore } from "../../interface/redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ProtectedRouter = () => {

    const location = useLocation();
    const jwt = useSelector((state:ReduxStore) => state.jwt);

    useEffect(() => { }, [jwt])

    if(!jwt.user.jwt){
        
        return <CheckCookie><Outlet/></CheckCookie>

    }else{

        if(location.pathname === '/login' || location.pathname === '/registration') return <Navigate to="/"/>

        return <Outlet/>

    }

}