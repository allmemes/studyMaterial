import React from 'react';
import { Component } from "react";
import UpdateComponent from './withCounter';
import { UpdateComponentProps } from './withCounter';

// this is for the props of the wrapped component itself. 
type MyHoverProp = {
    name: string
}

// defined a class component that will be inserted into HOC function. Note, the prop type must match.
class MyHoverClass extends Component<MyHoverProp & UpdateComponentProps, {}> {
    constructor(props: MyHoverProp & UpdateComponentProps)
    {
        super(props);
        this.state = {};
    }

    render() {
        // then we can directly access passed in method and prop from this.props.
        return (
           <h1 onMouseOver={this.props.incrementCount}> This is a {this.props.name} tag, and it is hovered {this.props.clickCount} times </h1>
        )
    }
};

// again, apply class component to the HOC function and export it.
const WrappedHoverComponent = UpdateComponent(MyHoverClass, 10);

export default WrappedHoverComponent;