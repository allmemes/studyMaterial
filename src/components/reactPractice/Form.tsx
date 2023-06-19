import { Component } from "react";

type emptyProp = {}

type formState = {
    userName: string
}

export class Form extends Component<emptyProp, formState> {
    constructor(props: emptyProp)
    {
        super(props)
        this.state = {
            userName: "Hang"
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // set with callback without return
        // this.setState((prevName) => ({userName: e.target.value}));
        // set with callbaclk with return
        // this.setState((prevName) => {return {userName: e.target.value}});
        // set without callback
        this.setState({
            userName: e.target.value
        })
        // console.log(this.state.userName);
    }

    render() 
    {
        return (
            <form>
                <div>
                    <label>UserName:</label>
                    <input type="text"
                            value={this.state.userName}
                            onChange={this.handleChange}></input>
                </div>
            </form>
        )
    }
}