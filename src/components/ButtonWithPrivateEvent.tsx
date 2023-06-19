// as always, define the type
type OuterButtonProps = {
    times: number,
    message: string,
}

// Export the component for later use. 
// Export default => use simple import without {}, Export without default => import with {}
export const ButtonWithPrivateEvent = (props:OuterButtonProps) => {
    // define the mouse event function with types.
    // To add type in typescript: let aVar: type = value.
    const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        for (let i = 0; i < props.times; i++) console.log(props.message);
    };
    // bind the button event with defined function while exposing parameters outward.
    return <button onClick={buttonClick}>Click</button>
}