import { useState, useMemo, useCallback } from "react";

export const UseMemoHook = () => {
    const [count1, updateCount1] = useState(0);
    const [count2, updateCount2] = useState(0);

    const increment1 = () => {
        updateCount1(count1+1);
    }

    const increment2 = () => {
        updateCount2(count2+1);
    }

    // when heavy calculation is causing problem for rerendering entire component, useMemo will 
    // help isolate the calculation when the dependencies change.
    // - when you want to cache a function, use useCallback. 
    // - When you want to cache the result of an invoked function, use useMemo.
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return count1 % 2 === 0;
    }, [count1])

    return (
        <div>
            <button onClick={increment1}> button {count1} </button>
            {/* This rerendering below is slow! */}
            <span>{isEven ? "event" : "odd"}</span>
            <button onClick={increment2}> button {count2} </button>
        </div>
    )
};
