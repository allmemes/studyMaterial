import { Component, RefObject } from "react";
import { FwRefChild } from "./FwRefChild";
import React from "react";

// this is an exmple of getting the ref of the child input first, and focus it within the parent component. (focus method is in the parent)
export class FwRef extends Component<{},{}> {
    // create the ref.
    private inputRef: RefObject<HTMLInputElement> = React.createRef();
    constructor(props:{}) {
        super(props);
        this.state = {};
    }

    handleFocus = ()=> {
        // check if we get the child input. 
        if (this.inputRef.current)
        {
            // if get it, focus it. 
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
           <div>
            {/* ref the child component */}
            <FwRefChild ref={this.inputRef}></FwRefChild>
            <button onClick={this.handleFocus}> focus the child input </button>
           </div>
        )
    }
};
