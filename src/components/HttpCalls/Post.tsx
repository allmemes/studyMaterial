import { Component } from "react";

type postState = {
    userId: string,
    title: string,
    body: string,
}

export class PostForm extends Component<{}, postState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: "",
        };
    }

    // always try to stick with arrow function to reduce unexpected error.
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState((form) => {
            // Note: to only update certain property of state at a time, 
            // we spread the rest of the form, and only update the target.name within []
            return {
              ...form,
              [name]: value,
            }}
          );
    }

    submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log(this.state);

        // post with fetch.
        fetch("https://jsonplaceholder.typicode.com/posts", 
            {method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //make sure to serialize your JSON body
                body: JSON.stringify(this.state)
            })
        .then( (response) => { 
            console.log(response);
        })
        .catch( (error => {console.log(error)}));
    }

    render() {
        const{userId, title, body} = this.state;

        return (
            <div>
                <form>
                    <input type="text" name="userId" value={userId} onChange={this.handleChange}/>
                    <input type="text" name="title" value={title} onChange={this.handleChange}/>
                    <input type="text" name="body" value={body} onChange={this.handleChange}/>
                </form>
                <button type="submit" onClick={this.submit}> Submit </button>
            </div>
        )
    }
};
