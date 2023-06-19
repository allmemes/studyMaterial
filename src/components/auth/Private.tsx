import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean,
    // below is how to type a component that accepts certain types as props. But this component itself
    // is also a props for other component. 
    Component: React.ComponentType<ProfileProps>
}
// we can also pass in component as props in another class component.
export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    if (isLoggedIn) {
        // a prop component that itself takes in props.
        return <Component name={"Hang"}/>
    }
    else 
    {
        return <Login/>
    }
}