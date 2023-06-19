import React from "react"

type memoProp = {
    name: string
}

// To memoize a function component, use React.memo() to enclose the function component. 
// this will achieve the same effect as the pure class component. 
const MemoComp = ({name}: memoProp) => {
    console.log("I rendered!");
    return (
        <div>
            {name}
        </div>
    )
}

const MemorizedComp = React.memo(MemoComp);
export {MemorizedComp};