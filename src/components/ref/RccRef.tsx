import { Component, RefObject } from "react";
import React from "react";
 
export class RccRef extends Component<{}, {}>{
    // register input reference as private variable to the class. 
    private inputRef: RefObject<HTMLInputElement> = React.createRef();

    constructor(props:{}) {
        super(props);
        this.state = {};
    }

    // after component mounted, focus it under the condition that it is not null. 
    componentDidMount(): void {
        if (this.inputRef.current)
        {
            console.log("input is referred!")
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
            // bind the ref here to the input
            <input ref={this.inputRef}></input>

            // Note, ref can be used to reference another customized component(child) as well.
            // 1, by doing this, methods of referenced child component can be called with ref.childMethod() from the parent component.
            // 2, but this component has to be a class component, not function component.
        )
    }
};
