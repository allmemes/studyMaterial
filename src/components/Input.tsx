import React, { useState } from 'react';

// A more complicated component with type and useState.
type InputProps = {
    id: string
}

export const Input = (props: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input id={props.id} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}