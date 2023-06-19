import React from 'react';
import UpdateComponent from './withCounter';
import { UpdateComponentProps } from './withCounter';

interface MyClickProps {
  // Props specific to MyComponent
}

// this is an example of function component that is being modified by HOC. imported UpdateComponentProps will allow you 
// to access the injected props and methods. 
const MyClickComponent: React.FC<MyClickProps & UpdateComponentProps> = ({ clickCount, incrementCount }) => {
  return (
    <div>
      {/* directly use the props and method */}
      <p>Click Count: {clickCount}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

// For HOC function, we must use them upon a component whose type matches the HOC definition.
const WrappedClikckComponent = UpdateComponent(MyClickComponent, 5);

// then we can return the result. 
export default WrappedClikckComponent;