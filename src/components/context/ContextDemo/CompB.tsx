import { useContext } from "react";
import { UserConsumer } from "./userContext";
import { UserContext } from "./userContext"

export const CompB = () => {

    // 1, Consume the context with useContext hook: useContext is the hook that will ONLY help us better consume the context.
    const user = useContext(UserContext);

    return (
        <div> 
            hello - {user}
            {/* 2, consume the contexted value without useContext hook, import the consumer and render an anonymous function that output a tsx. */}
            <UserConsumer>
                {
                    (name)=>{
                        return (
                            <div>hello -  {name}</div>
                        )
                    }
                }
            </UserConsumer>
        </div>
    )
};
