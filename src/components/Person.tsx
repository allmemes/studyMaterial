// complicated component can import .types.ts file.
import { PersonProps } from './Person.types';

// Simple component can just use infile type directly.
// type PersonProps = {
//     name: {
//         first: string, 
//         last: string
//     }
// }

export const Person = (props: PersonProps) => {
    return (
        <div> 
            {props.name.first} {props.name.last} 
        </div>
    )
}