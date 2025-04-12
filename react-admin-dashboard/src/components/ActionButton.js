import React from 'react';

function ActionButton({ text, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
}

export default ActionButton;
