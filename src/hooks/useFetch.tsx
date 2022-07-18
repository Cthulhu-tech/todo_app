import { useEffect, useState } from "react"

export const useFetch = (url: string) => {

    const [data, setData] = useState<any>();
    const [error, setError] = useState<Error>();
    const [load, setLoad] = useState(true);

    useEffect(() => {

        fetch(process.env.REACT_APP_SERVER + url, {
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        }).then((response) => {

            return response.json();

        }).then((json) => {

            setLoad(false);
            return setData(json);

        }).catch((err) => {

            setLoad(false);
            return setError(err);

        })

    }, []);

    return {load, data, error};

}