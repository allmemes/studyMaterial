import { useState, useCallback } from "react";
import MemoButton from "./childButton";
import MemoCount from "./childCount";

export const CallbackParent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(1000)

    // when multiple component with callback functions as props are used, update one component with 
    // certain function will cause other same component update se well, since every time the referece to 
    // function is different. 
    const handleAge = useCallback(()=> {
        setAge(age+1);
    }, [age])
    // to avoid this duplicate rerendering, we 1, set all component into memo state: memo(component)
    // then 2, wrap the props-callback in useCallback hooks and add state as dependency. 
    // Then, those callback function will only update when the depended state is changed. 
    const handleSalary = useCallback(()=> {
        setSalary(salary+1)
    }, [salary])

    return (
        <div>
            <MemoCount text={"age"} count={age}></MemoCount>
            <MemoButton handleCallback={handleAge}>age</MemoButton >

            <MemoCount text={"salary"} count={salary}></MemoCount>
            <MemoButton  handleCallback={handleSalary}>salary</MemoButton>
        </div>
    )
};
