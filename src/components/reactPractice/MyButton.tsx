type buttonProps = {
    children: string,
    onClick: ()=> void,
    // limit input color option to those two below, and color is optional.
    color?: "primary" | "secondary"
}

// color is optional, if not passed in as input, default is primary.
export const MyButton = ({children, onClick, color="primary"}: buttonProps)=> {
    return (
        <div>
            <button type="button" 
                    className={`btn btn-${color}`}
                    onClick={onClick}>{children}</button>
        </div>
    )
}
