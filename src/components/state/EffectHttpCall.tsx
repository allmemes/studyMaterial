import { useReducer, useEffect } from "react";
import { cursorTo } from "readline";

type stateType = {
    loading: boolean,
    error: string,
    post: string
}
type actionType = {
    // type: string,
    type: "success",
    payload: string
}
type actionFailType = {
    // type: string,
    type: "fail"
}

const initialState = {
    loading: true,
    error: "",
    post: ""
}

function reducer (state: stateType, action: actionType | actionFailType) {
    switch (action.type) {
        case "success":
            return {
                loading: false,
                error: "",
                post: action.payload
            }
        case "fail":
            return {
                loading: false,
                error: "ERROR!",
                post: ""
            }
        default: 
            return state
    }
}

export const EffectHttpCall = () => {

    const [curState, dispatch] = useReducer(reducer, initialState);

    useEffect(
        ()=>{ fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => res.json())
            .then(json=>{
                dispatch({type: "success", payload:json.title})
            })
            .catch(error => {
                dispatch({type: "fail"})
            })
        },[]
    )

    return (
        <div>
            {curState.loading? curState.error : curState.post}
            {curState.error? curState.error : null}
        </div>
    )
};