import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

// for React component, the component's name must start with an upper case letter.
// below is an example of class component, which follows the template of js class by inheriting react component
// if props is empty, just pass in {}, if the state is empty, just remove it. 
export class Counter extends Component<CounterProps, CounterState> {
    // if using constructor, props must be typed with corresponding prop type above within the <> 
    // and super(props) must be used to honer the inheritance. 
    // this.state will include all the variables private to this component. 
    constructor(props:CounterProps) {
        super(props);
        this.state = { count: 0 };
    }
    // if not using constructor, every class component comes with its own state without this, which contains all the properties it has.
    // state = {
    //     count: 0,
    // }

    // we can also defined class component method, which may involve suing setState function.
    // setState function can be found within this, which points to this component, and this function
    // can be used to update any property within the state object. 
    handleClick = () => {
        this.setState((prevState)=> ({count: prevState.count + 1}));
    }

    // every class component has its own render function, which decides what it will show.
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> increment </button>
                {/* this.props can access the properties being exposed to the outside, which is typed earlier 
                after the Component, within the angle bracket */}
                {this.props.message} {this.state.count}
            </div>
        )
    }

    // At last, there are four built-in functions that will be called inorder: 
    // constructor()
    // getDerivedStateFromProps()
    // render()
    // componentDidMount()
    // when we mount a component.
}