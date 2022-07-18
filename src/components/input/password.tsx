import visibleImg from "../../assets/password/visible.png";
import hiddenImg from "../../assets/password/hidden.png";
import { IInput } from "../../interface/input";
import styles from "./password.module.scss";
import { useState } from "react";

export const PasswordInput = ({value, onChange}: IInput) => {

    const [visible, setVisible] = useState(false);

    const imgHandler = () => setVisible(!visible);

    return <div className={styles.input_container}>
                <input
                    className={styles.input}
                    type={visible ? "text" : "password"} 
                    onChange={onChange} 
                    value={value} 
                    name="password"
                    placeholder="password"
                />
                <img
                    className={styles.input_img}
                    onClick={imgHandler} 
                    src={visible ? visibleImg : hiddenImg} 
                    alt={visible ? 'visible' : 'hidden'} 
                />
            </div>
    
}