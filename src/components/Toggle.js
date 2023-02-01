import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";

  return (
  <button style= {{ background: color }} onCLick={handleClick}>
    {isOn ? "ON" : "OFF"}
    </button>
    );
}

export default Toggle;
