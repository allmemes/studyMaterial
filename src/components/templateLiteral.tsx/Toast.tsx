type HorizontalType = "left" | "center" | "right";
type VerticalType = "top" | "center" | "bottom";

// we can even use string literal when defining the types
type ToastType = {
    // the exclude keyword can accept two variables inside <>: 1, the original type, 2, the type that you want to exclude
    // and finally, using | operator, we can add extra string we want to accept.
    position: Exclude<`${HorizontalType} - ${VerticalType}`, "center - center"> | "center"
}

export const Toast = ({position}:ToastType)=> {
    return (
        <div> 
            Notification position is {position}
        </div>
    )
}