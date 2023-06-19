import React from "react";


type callBackType = {
    handleCallback: ()=> void
    children: React.ReactNode
}

const ChildButton = ({handleCallback, children}:callBackType) => {
    console.log(`update ${children}`);
    return (
        <button onClick={handleCallback}>{children}</button>
    )
};

const MemoButton = React.memo(ChildButton);
export default MemoButton;