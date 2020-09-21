import React, { useState } from 'react';

const MyForm = () => {
  const [text, setText] = useState('');

  // Save input box value to state when it has been changed
  const inputChanged = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    alert(`You typed: ${text}`);
    //avoid navigating to the next page
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* When the value of the input field is changed, the new value will be saved to the state.  */}
      <input type="text" onChange={inputChanged} value={text}/>
      <input type="submit" value="Press me"/>
    </form>
  );
};

export default MyForm;