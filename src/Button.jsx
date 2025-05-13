import React from 'react';

const Button = ({ children, props }) => {
  return (
    <button {...props} style={{ padding: '10px', backgroundColor: 'black', color: 'white' }}>
      {children}
    </button>
  );
};

export default Button;
