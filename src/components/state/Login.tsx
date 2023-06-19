// About useState, if you update with the same value after initial rendering, the component will not rerender.
// if you give it same value after rerender, it will rerender one more times then stop.
import { useState } from "react";

export const Login = () => {

    // isloggedin will be assigned with a bool, since in useState, we passed in a bool. 
    // the setLoggedin is a function that updates the isLoggedin status. 
    const [isLoggedin, setLoggedin] = useState(false);

    const handleLogin = () => {
        setLoggedin(true);
    };
    const handleLogout = () => {
        setLoggedin(false);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedin? "logged in":"logged out"}</div>
        </div>
    )
}