import { useEffect, useState } from "react";

export const HookMouse = () => {
    const [x, udpateX] = useState(0);
    const [y, updateY] = useState(0);

    const logPosition = (e:MouseEvent) => {
        udpateX(e.clientX);
        updateY(e.clientY);
    }

    // include an empty array as the second parameter to ask react to rely this mouse event on NOTHING.
    // Hence, this allows this event only happen once, like componentDidMount in class component.
    // Inside useEffect, we can also do http calls.
    useEffect(
        () => {
            console.log("Effect is called");
            window.addEventListener("mousemove", logPosition)

            // This function that is returned will mimic the componentWillUnmount behaviour in class component. 
            return ()=>{
                console.log("unmount!");
                window.removeEventListener("mousemove", logPosition);
            }
        }, [] // Note: if we are adding a automatically-changing value, this value will also be put into this array for listening.
    )

    return (
        <div>
            X-{x}, Y-{y}
        </div>
    )
};
