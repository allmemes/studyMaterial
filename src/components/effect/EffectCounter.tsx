import { useState, useEffect } from "react";

export const EffectCounter = () => {
    const [count, updateCount] = useState(0);
    const [name, updateName] = useState("");

    // use effect runs after every render. It is the function component version of rendering in "lifecycle"
    // the second parameter is an array of variable, and only after those variables are changed, use effect is active.
    useEffect(()=>{
        console.log("updated!")
        document.title=`clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input value={name} onChange={(e)=>updateName(e.target.value)}></input>
            <button onClick={()=>updateCount(count+1)}>clicked {count} times</button>
        </div>
    )
};
