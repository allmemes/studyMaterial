type textType = {
    text: string
}

export const ReadContext = (props: textType)=> {
    return (
        <div>
            <div className = "showArea" style={{backgroundColor:"gray"}}>{props.text}</div>
        </div>
    )
}