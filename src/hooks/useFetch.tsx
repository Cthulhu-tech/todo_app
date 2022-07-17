import { useEffect, useState } from "react"

export const useFetch = (url: string) => {

    const [data, setData] = useState<any>();
    const [error, setError] = useState<Error>();
    const [load, setLoad] = useState(true);

    useEffect(() => {

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
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