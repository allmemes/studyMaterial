type InputType = React.ComponentProps<'input'>;

export const CustomedInput = (props:InputType) => {
    return <input {...props} />
}