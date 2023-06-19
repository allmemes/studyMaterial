type StatusProps = {
    // type can be more specific than simple string. 
    status: 'loading' | 'success' | 'fail' 
}

// below is an example of function component, which is indicated by an arrow function.
export const Status = (props: StatusProps) => {  
    let message;
    if (props.status === "loading") message = "Loading...";
    else if (props.status === "success") message = "Success";
    else message = "Fail";

    return (
        <div> 
            <h2>{message}</h2>
        </div>
    )
}