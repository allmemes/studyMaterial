import { useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    // within the <>, it says the type can be null or AuthUser in the future. 
    // within the (), it says the INITIAL type of user is null.
    // By doing this, we can give user type at the time when we do not know the type yet.
    const [user, setUser] = useState<AuthUser|null>(null);

    const handleLogout = () => {
        setUser(null);
    };

    const handleLogin = () => {
        setUser({
            name: "Hang",
            email: "www.com"
        }
        )
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            {/* the ? is corresponding to the situation where user could be null */}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>

            {/* Or use below, which is much more verbose */}
            {/* <div>User name is {user === null ? "Guest":"User name"}</div>
            <div>User email is {user === null ? "Guest":"User email"}</div> */}
        </div>
    )
}