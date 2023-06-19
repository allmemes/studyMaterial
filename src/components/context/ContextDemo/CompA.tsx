import { Component } from "react";
import { CompB } from "./CompB";

export class CompA extends Component<{},{}> {
    constructor(props:{}) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <CompB></CompB>
        )
    }
};
