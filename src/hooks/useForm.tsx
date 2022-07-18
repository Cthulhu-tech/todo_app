import { useState } from "react";
import { formResponse } from "../interface/input";

export const useForm = (url: string) => {

    const [data, setData] = useState<formResponse>();
    const [values, setValue] = useState({password: "", login: ""});

    const handlerForm = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if(values.login.length > 0 && values.password.length > 0) 
            fetch(process.env.REACT_APP_SERVER + url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(values)

            }).then((response) => {

                return response.json();

            }).then((json) => {

                setData({...data, error: ""});
                return setData(json);

            }).catch((err) => {

                setData({...data, message: ""});
                return setData(err);

            })
            else
                setData({...data, error: "fields are not filled"});
    }
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = event.target;
        
        setValue({
          ...values,
          [name]: value,
        });

    };

    return { data, values, onChange, handlerForm };

}