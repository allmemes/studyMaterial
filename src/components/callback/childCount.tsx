import React from "react";

type countType = {
    text: string,
    count: number
}

export const ChildCount = ({text, count}: countType) => {
    console.log(`update ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
};

const MemoCount = React.memo(ChildCount);
export default MemoCount;
