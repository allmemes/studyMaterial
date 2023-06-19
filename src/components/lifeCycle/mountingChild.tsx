import { Component } from "react";

type mountingProp = {}
type mountingState = {}

export class MountingChild extends Component<mountingProp, mountingState> {
    // 1, first to happen in the mounting lifecycle. This is when we bind the event handler
    // but we DO NOT call http calls.
    constructor(props:mountingProp)
    {
        super(props);
        this.state = {};
        console.log("constructor phase");
    }

    // 2, second to happen. When state of the component depends on the changes in props over time.
    // we also DO NOT make http calls, and we cannot access this.state or setState in this function.
    // usually return an object.
    public static getDerivedStateFromProps(props: mountingProp, state: mountingState) 
    {
        console.log("get derived phase");
        return null;
    }

    // 3, third to happen. We DO NOT change state nor make http calls.
    // Also, the child's lifecycle methods are also called.
    render() 
    {
        console.log("render phase");
        return (
            <div>

            </div>
        )
    }

    // 4, fourth to happen, perfect place to make http calls.
    componentDidMount()
    {
        console.log("did mount phase");
    }
}