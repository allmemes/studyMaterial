type ContainerPorp = {
    style: React.CSSProperties
}

export const Container = (props: ContainerPorp) => {
    // None props way of styling.
    // const style = {
    //     border: '1px solid black'
    // }

    // props way of styling.
    return (
        <div style={props.style}> 
            Container Text
        </div>
    )
}