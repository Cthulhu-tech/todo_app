import { useInput } from "../../hooks/useInput";

export const LoginInput = () => {

    const {value, onChange} = useInput("");

    return <input type="text" onChange={onChange} value={value}/>

}