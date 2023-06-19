import React, { ComponentType } from 'react';

// HOC is a function that receives a component but return a component with much better or shared/reusable funcionalities.
// Those functionalies or extra props must be typed and injected to the component. 
// 1, define the injected props type. EXPORT it, so that wrapped component will know the type as well.
export interface UpdateComponentProps {
  clickCount: number;
  incrementCount: () => void;
}

// 2, define a function, it receives a component with a generic prop type T that inherits from object (this is usually refer to the prop of the original component),
// PLUS the extra props to be injected (defined above).
// Also, since it is a function, it can receive extra functions (like times below to change how fast we want the counter to increase)
const UpdateComponent = <T extends object>(WrappedComponent: ComponentType<T & UpdateComponentProps>, 
                                          times:number) => {
  // defined the output component with prop type of T and state type of click.
  class UpdateComponent extends React.Component<T, { clickCount: number }> {
    constructor(props: T) {
      super(props);
      // the state that will be injected to the wrapped component.
      this.state = {
        clickCount: 0,
      };
    }

    // function to be injected.
    incrementCount = () => {
      this.setState((prevState) => ({
        clickCount: prevState.clickCount + times,
      }));
    };

    render() {
      return (
        // pass down any props that come from outside with spread operator.
        <WrappedComponent {...this.props}
          // inject the click and event handler to the wrapped component.
          clickCount={this.state.clickCount}
          incrementCount={this.incrementCount}/>
      );
    }
  };
  // return the output component. 
  return UpdateComponent;
};

// export the HOC function.
export default UpdateComponent;
