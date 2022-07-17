import { updateToken } from "../../redux/store/jwt";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../../views/error/error";
import { Loading } from "../loading/loading";
import { useDispatch } from "react-redux";

export const CheckCookie = (props: { children: React.ReactNode }) => {

    const dispatch = useDispatch();
    const {load, data, error} = useFetch((process.env.REACT_APP_SERVER as string) + 'refresh');

    if(load) return <Loading/>
    if(error) return <Error error={error}/>
    if(data.error) return <Error error={data.error}/>

    dispatch(updateToken(data));

    return <>{props.children}</>

}
