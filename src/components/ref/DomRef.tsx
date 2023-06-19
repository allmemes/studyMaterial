import { useRef, useEffect, useState } from "react";

export const DomRef = ()=> {
    // 1, since this ref will point towards an input element, it will be typed accordingly as well.
    // const inputRef = useRef<HTMLInputElement>(null);
    // 2, or if we know this ref dom will not be null, add ! after null to indicate it is not null. 
    // useRef returns an object with one property called current.
    const inputRef = useRef<HTMLInputElement>(null!);

    // useRef can also store value, but different from useState: 
    // 1, the value of the reference is persisted between rerendering. 
    // 2, update ref does not trigger rerendering. 
    // 3, reference update is synchronous.
    // 4, it can access any dom element.
    const obj = useRef(0);

    useEffect(() => {
        // 1, optional chaining using ? can help check if an object is null
        // inputRef.current?.focus();
        // 2, if we add ! after null above, we can remove ?
        inputRef.current.focus();
    }, [])


    useEffect(()=> {
        // stored value does not change.
        console.log(obj.current);
    })

    return (
        <div> 
            <input type="text" ref={inputRef}/>
            <div>{obj.current}</div>
        </div>
    )

}