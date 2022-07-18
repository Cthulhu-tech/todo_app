import { updateToken } from "../../redux/store/jwt";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../../views/error/error";
import { Loading } from "../loading/loading";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";

export const CheckCookie = (props: { children: React.ReactNode }) => {

    const dispatch = useDispatch();
    const {load, data, error} = useFetch('refresh');

    if(load) return <Loading/>
    if(error) return <Error error={error}/>
    if(data.error) return <Error error={data.error}/>

    if(data?.auth && data.login && data.accesstoken){

        dispatch(updateToken({user: {

            login: data.login,
            jwt: data.accesstoken,
    
        }}));

        return <>{props.children}</>

    }else{

        return <Navigate to="/login"/>

    }

}
