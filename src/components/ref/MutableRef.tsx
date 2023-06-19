import { useState, useRef, useEffect} from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    // since setInterval returns a number, here the type should be number or null.
    // useRef can track variable/dom node and does not cause rerender (value persists).
    const intervalRef = useRef<number|null>(null);

    const stopTimer = ()=> {
        // Stop the setInterval with clearInterval.
        if (intervalRef.current) clearInterval(intervalRef.current);
    }

    // useEffect hooks will create "side-effect" certain interaction when you rerender certain object.
    // it takes in two variables: 1, an arrow function that indicate the interaction, 2, an array 
    // of object that will trigger the side effect logic. 
    useEffect(()=> {
        intervalRef.current = window.setInterval(()=>{
            setTimer(timer=>timer+1)
        }, 1000)
        // below act like component did unmount.
        return ()=> {
            stopTimer();
        }
    }, [])

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={()=>stopTimer()}> Stop Timer </button>
        </div>
    )
}