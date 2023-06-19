type OscarProps = {
    // type of children can be react Node, like another element
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return (
        // below points to whatever element being put in in the App.tsx.
        <div>{props.children}</div>
    )
}