type ButtonProps = {
    // handleClick is the self defined event props name,
    // it has type of a function, where the input is the mouse event, output is void.
    // <> contains specific info about the mouse event, it is a click event. 
    // it also supports multiple input parameters.
    // Here, this component only has type defined, the logic of the click event is defined outside of the component.
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const ButtonWithOuterEvent = (props: ButtonProps) => {
    return <button onClick={(event) => props.handleClick(event, 2)}>Click</button>
}