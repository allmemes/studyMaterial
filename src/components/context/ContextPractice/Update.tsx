import { useContext } from "react";
import { myContext } from "./OuterContext";

type textType = {
    text: string,
    fun: (value: string) => void
}

export const UpdateContext = (props:textType) => {
    let context = useContext(myContext);

    let writeToLocal = (evt: React.ChangeEvent<HTMLInputElement>) => {
        props.fun(evt.target.value);
        let obj = localStorage.getItem(context.key);
        if (obj)
        {
            let item = JSON.parse(obj);
            item.name = evt.target.value;
            localStorage.setItem(context.key, JSON.stringify(item));
        }
        else localStorage.setItem(context.key, JSON.stringify({name: evt.target.value}));
    }

    return (
        <div>
            <input onChange={writeToLocal} value={props.text}/>
        </div>
    )
}



