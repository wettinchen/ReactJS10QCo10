import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>Add color value:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={ colorValue }
        onChange={(event) => {
          setColorValue(event.target.value);
          setHexValue(colorNames(event.target.value));
        }}
      />
    </form>
  )
}

export default Input