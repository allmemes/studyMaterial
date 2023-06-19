// type of the props
type GreetProps = {
    name: string
    // ? indicates that age is an optional props.
    age?: number
    isLoggedin: boolean
}

export const Greet = (props: GreetProps) => {
    // with deconstrution, if we do not pass in age, we use 0 as default age. 
    // if we do pass in age, use the passed in age as props.age.
    const {age = 0} = props;
    return (
        <div> 
            <h1>
                {props.isLoggedin? 
                    `Welcome! ${props.name}, and you are ${age} years old` : 
                    `Welcome! Guest`}
            </h1>
        </div> 
    )
}