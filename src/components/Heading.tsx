type HeadingProps = {
    // children in typescript special type that can be anything, and it can be direcly invoked as html content.
    children: string
}

export const Heading = (props: HeadingProps) => {
    // css
    const style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
    }
    return <h2 style={style}>{props.children}</h2>
}