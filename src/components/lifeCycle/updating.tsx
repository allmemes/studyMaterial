import { Component } from "react";
// import { MountingChild } from "./mountingChild";

type updatingProp = {}
type updatingState = {
    age: number
}

export class Updating extends Component<updatingProp, updatingState> {
    constructor(props:updatingProp)
    {
        super(props);
        this.state = {age: 10};
        // console.log("constructor phase");
    }

    // 1, first to happen during update. When state of the component depends on the changes in props over time.
    // we also DO NOT make http calls, and we cannot access this.state or setState in this function.
    // usually return an object.
    static getDerivedStateFromProps(props: updatingProp, state: updatingState) 
    {
        console.log("get derived phase");
        return null;
    }

    // 2, second to happen during update. Dictates a component hould rerender or not. By default, all components
    // should rerender when props or state change. Do not use http calls.
    shouldComponentUpdate()
    {
        console.log("should component update");
        return true;
    }

    // 3, third to happen during update. We DO NOT change state nor make http calls.
    // Also, the child's lifecycle methods are also called. More common.
    render() 
    {
        console.log("render phase");
        return (
            <div> 
                <div>{this.state.age}</div>
                <button onClick={()=>this.setState({age: 20})}>Change</button>
            </div>
        )
    }

    // 4, fourth to happen during update, either return null or return a value for the following function.
    getSnapshotBeforeUpdate(prevProp: updatingProp, prevState: updatingState)
    {
        console.log("get snapshot");
        return null;
    }

    // 5, last to happen during update. Only happen once during rerendering. Can make http calls. More common.
    componentDidUpdate(prevProp: updatingProp, prevState: updatingState)
    {
        // can compare prevstate with current state to determine whether to update the component.
        if (prevState.age != this.state.age)
        {
            console.log("did update");
        }
    }

    // This is called when component is unmounted or destroyed. 
    // Suitable for removing event handler or cancelling request.
    // Do not call setState.
    componentWillUnmount()
    {
        console.log("unmount component");
    }
}