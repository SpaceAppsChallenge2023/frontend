// ButtonGroup.js
import React from 'react';

function Button({ label, onClick }) {
  return (
    <button 
    onClick={() => onClick(label)}
      className=" font-bold py-2 px-4 rounded m-1"
    >
      {label}
    </button>
  );
}

function ButtonGroup({ onAudioToggle }) {
  return (
    <div className="flex">
      <Button label="A" onClick={onAudioToggle}/>
      <Button label="M" onClick={onAudioToggle}/>
    </div>
  );
}

export default ButtonGroup;
