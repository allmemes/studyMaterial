import { Component, ErrorInfo } from "react";

type errorProp = {
    children?: React.ReactNode
}

type errorState = {
    hasError: boolean
}

// Error Bound is a class component that wraps around other components to watch out for error.
export class ErrorBound extends Component<errorProp, errorState> {
    constructor(props:errorProp) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: Error)
    {
        // return a new object for the state.
        return {
            hasError: true
        }
    }

    // used to log out the error
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error);
    }

    render() {
        // if has error become true, report the error tag.
        if (this.state.hasError)
        {
            return <h1> Something went wrong</h1>
        }
        return this.props.children;
    }
};
