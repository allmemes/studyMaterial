import { createContext, useState } from "react";
import { UpdateContext} from './Update';
import { ReadContext } from './Read';
import { DeleteContext } from './Delete';

let controlObj = {key: "testing"};
export let myContext = createContext(controlObj);

export const OuterContext = () => {
    let obj = localStorage.getItem(controlObj.key);
    // when you want to pass props between component, manage state at their parents.
    // state can be combined with short circuit in local storage.
    const [textState, updateText] = useState(obj? JSON.parse(obj).name : "");

    return (
        <myContext.Provider value={controlObj}>
            {/* function can also be passed in as props */}
            <UpdateContext text={textState} fun={updateText}/>
            <ReadContext text={textState}/>
            <DeleteContext fun={updateText}/>

        </myContext.Provider>
    )
}