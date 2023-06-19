// when we want to extract a component props or type from a library or file that does not export the type,
// we can import the component who has the type first. 
import { Greet } from "../Greet";

// and then use React.ComponentProps<typeof Greent> to access, "steal" its props, and use it. 
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div> 
            {props.age}
        </div>
    )
}