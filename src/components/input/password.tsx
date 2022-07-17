import { useInput } from "../../hooks/useInput";

export const PasswordInput = () => {

    const {value, onChange} = useInput("");

    return <input type="password" onChange={onChange} value={value}/>

}