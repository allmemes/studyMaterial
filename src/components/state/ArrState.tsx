import { useState } from "react";

type arrState = number[]

export const ArrState = () => {
    // type the state when using useState
    const [arr, updateArr] = useState<arrState>([]);

    const addItem = ()=> {
        // spread the original value and add extra 1,
        // if it is an arr of object, just spread the original array, and add in {key: value}
        updateArr([...arr, 1]);
        console.log(arr);
    }

    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
                {arr.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
};
