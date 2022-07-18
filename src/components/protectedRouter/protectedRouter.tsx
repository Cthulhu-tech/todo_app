import { Navigate, Outlet, useLocation } from "react-router";
import { CheckCookie } from "../checkCookie/checkCookie";
import { ReduxStore } from "../../interface/redux";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const ProtectedRouter = () => {

    const location = useLocation();
    const jwt = useSelector((state:ReduxStore) => state.jwt);

    if(!jwt.user.jwt){

        if(location.pathname === '/login' || location.pathname === '/registration') return <Outlet/>
        
        return <CheckCookie><Outlet/></CheckCookie>

    }else{

        let decodedToken:any = jwt_decode(jwt.user.jwt);

        if (decodedToken.exp * 1000 < new Date().getTime()) return <CheckCookie><Outlet/></CheckCookie>

        if(location.pathname === '/login' || location.pathname === '/registration') <Navigate to="/"/>

        return <Outlet/>

    }

}