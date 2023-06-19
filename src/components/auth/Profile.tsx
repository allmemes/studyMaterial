export type ProfileProps = {
    name: string 
}

export const Profile = ({name}:ProfileProps)=> {
    return (
        <div> This is private, and name is {name}</div>
    )
}