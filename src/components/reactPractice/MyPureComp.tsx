import { PureComponent } from "react";

type pureProp = {
    name: String
}

// 1, Pure component will rerender and update itself only when its props or states are different by shallow comparison.
//   - shallow comparison for simple data type: compare type and value.
//   - shallow copmarison for copmlex data type: compare reference. Thus, when using pure component with complex props like array, pushing item into array will NOT cause it to 
//     rerender, since reference is not changed. Return a new array object instead. 
// 2, However, a normal component will always update and rerender itself once triggered by some event. 
// 3, If parent does not rerender, children comps will also not rerender. 
// 4, Pure component only works on class component. 
export class MyPureComp extends PureComponent<pureProp,{}> {
    constructor(props:pureProp) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("I rendered!");
        return (
           <div> {this.props.name} </div>
        )
    }
};
