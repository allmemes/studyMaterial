
import { Name } from "./Person.types"
// Import reusable type from .types.ts file.
type PersonListProps = {
    names: Name[]
}

// Similar simple infile type.
// type PersonListProps = {
//     // type + [] means it is a list of certain type
//     names:{
//         first: string,
//         last: string
//     }[]
// }

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}> {name.first}, {name.last} </h2>
                )
            })}   
        </div>
    )
}