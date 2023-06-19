import { useContext } from "react";
import { UserContext } from "./UserContext";


export const User = ()=> {
    // now the login state and setstate function can be passed in as context from outside.
    const userContext = useContext(UserContext);
    const handleLogin = ()=> {
        // since we used type insertion, we do not need to add if statement to check if userContext is null or not.
        userContext.setUser({
            name: "Hang",
            email: "www.com"
        })
    };
    const handleLogout = ()=> {
        userContext.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}> login </button>
            <button onClick={handleLogout}> logout </button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}