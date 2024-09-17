// src/components/Button.js
import React from 'react';

// The Button component accepts two props: `onClick` for the button action and `label` for the button text.
function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
}

// Styling for the button
const styles = {
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Button;
