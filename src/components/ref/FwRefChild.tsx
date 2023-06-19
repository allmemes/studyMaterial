import React from "react";

// to accept the ref passed in from the paret, wrap it with forwardRef function.
// now the the function has the second parameter called ref.
const FwRefChild = React.forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <div>
            {/* now just reference the input */}
            <input ref={ref}></input>
        </div>
    )
})

export {FwRefChild};