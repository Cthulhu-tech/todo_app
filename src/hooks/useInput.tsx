import { useCallback, useState } from "react";

export const useInput = (initial = "") => {

    const [value, setValue] = useState(initial);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),[]);

    return {value, onChange};

}