import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User2 = () => {
    // Similar to User1, we can use type insertion to indicate that the user can never be null with the "as" keyword. 
    // When to use type insertion: 1, the object will soon be initiated, 2, it will never be null later in the future. 
    const [user, setUser] = useState<AuthUser>({} as AuthUser);


    const handleLogin = () => {
        // setUser({
        //     name: "Hang",
        //     email: "www.com"
        // })

        // However, when we only want to update certain property (say name) of an object state, 
        // we want to use below, since setUser will not merge the updated result.
        setUser({
            ...user,
            name: "Hang",
        })
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>

            {/* Since now the user cannot be null, we can remove the ? */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}