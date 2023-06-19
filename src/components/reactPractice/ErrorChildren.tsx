type errorProp = {
    name: string
}

export const ErrorChildren = ({name}: errorProp) => {
    if (name === "bug")
    {
        // without the error bound component, this error will break down the entire app.
        throw new Error("there is a bug!");
    }
    return (
        <div>{name}</div>
    )
};
