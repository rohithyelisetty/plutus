import React from 'react';
import './toggle.css';

function Toggle({isOn, handleToggle}) {
  return (
    <>
      User Type: {isOn ? "Brand" : "User"}
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
}

export default Toggle;