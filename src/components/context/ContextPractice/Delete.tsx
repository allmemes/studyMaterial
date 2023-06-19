import { myContext } from "./OuterContext";
import { useContext } from "react";

type textType = {
    fun: (value: string) => void
}

export const DeleteContext = (props:textType)=> {
    let context = useContext(myContext);
    const remove = () => {
        let obj = localStorage.getItem(context.key);
        if (obj)
        {
            localStorage.removeItem(context.key);
            props.fun("");
        }
    }
    return (
        <button onClick={remove}> delete </button>
    )
}