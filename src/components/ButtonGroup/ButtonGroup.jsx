// ButtonGroup.js
import React from 'react';

function Button({ label }) {
  return (
    <button 
      onClick={() => console.log(label)} 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
    >
      {label}
    </button>
  );
}

function ButtonGroup() {
  return (
    <div className="flex">
      <Button label="A" />
      <Button label="M" />
      <Button label="D" />
    </div>
  );
}

export default ButtonGroup;
