// ButtonGroup.js
import React, { useState } from "react";

function Button({ label, onClick, isToggled }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`
      font-bold py-2 px-4 rounded m-1 
      ${
        isToggled
          ? "border-2 border-blue-500"
          : "hover:border-2 hover:border-gray-500"
      }
    `}
    >
      {label}
    </button>
  );
}

function ButtonGroup({ onAudioToggle }) {
  const [toggledButtons, setToggledButtons] = useState({
    A: true,
    M: true,
    D: true, 
  });

  const handleButtonClick = (label) => {
    // Toggle the state of the clicked button
    setToggledButtons((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));

    // Trigger audio toggling from parent
    onAudioToggle(label);
  };
  return (
    <div className="flex">
      <Button
        label="A"
        onClick={handleButtonClick}
        isToggled={toggledButtons.A}
      />
      <Button
        label="M"
        onClick={handleButtonClick}
        isToggled={toggledButtons.M}
      />
      <Button
        label="D"
        onClick={handleButtonClick}
        isToggled={toggledButtons.D}
      />
    </div>
  );
}

export default ButtonGroup;
