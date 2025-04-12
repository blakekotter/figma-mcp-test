import React from 'react';
import './ActionButton.css';

function ActionButton({ text, onClick }) {
  return (
    <div className="action-button" onClick={onClick}>
      {text}
    </div>
  );
}

export default ActionButton;