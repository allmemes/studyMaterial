// useState is not the only way of managing state. UseReducer is a more complex hook
import { useReducer } from "react";

type CounterState = {
    count: number
}

type UpdateAction = {
    // as before, type can be specified to only be certain string.
    type: "increment" | "decrement"
    payload: number
}

type ResetAction = {
    // another action can come without payload. 
    type: "reset"
}

// An object to record the initial count.
const initialState = {count: 0};

// below, action can switch between different action types, since we know reset action does not have any payload associated with it.
// also, this action function can be shared bewteen multiple userReducers. 
function reducer(state:CounterState, action: UpdateAction | ResetAction) {
    // this action parameter is what we will pass into the dispatch function later.
    switch (action.type) {
        case "increment":
            // note: return a new object with incremented count, can also use spread operator to update certain property only.
            return {count: state.count + action.payload};
        case "decrement": 
            return {count: state.count - action.payload};
        case "reset": 
            return initialState;
        default: 
            return state;
    }
}

export const Counter = () => { 
    // useReduce takes in two parameters: a reducer function which updates the states and an initial states.
    // Positioned weirdly, it returns an array with the 
    // 1, state first and
    // 2, a dispatch function, which is what we call to update the state -> call the reducer function.
    // This dispatch function takes in the object of an action, based on different kind.
    // Compared with UseStates, where different state have their own setState function, dispatch function 
    // can handle them uniformly with type indicating what state action it is and payload indicating what 
    // parameter it is changing.
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={()=>dispatch({type: "increment", payload: 10 })}>Increment 10 </button>
            <button onClick={()=>dispatch({type: "decrement", payload: 10 })}>Decrement 10 </button>
            {/* when dispatch reset action, passing in only the action type */}
            <button onClick={()=>dispatch({type: "reset" })}>Reset </button>
        </div>
    )
}