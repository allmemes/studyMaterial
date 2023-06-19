import { Component } from "react";

type postProps = {
    title: string
}

export class GetList extends Component<{}, postProps> {
    constructor(props:{}) {
        super(props);
        this.state = {
            title: ""
        };
    }

    // as mentioned before, after component mounted, which only happens once, it is perfect to make http calls.
    componentDidMount(): void {
        // we can make our own async functions
        this.getData().then(json => {
            // console.log(json)
            this.setState({title: json.title});
        })
    }

    async getData () {
        let call = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
        return call;
    }

    render() {
        // destructure the state.
        const {title} = this.state;
        return (
           <div> {title} </div>
        )
    }
};
