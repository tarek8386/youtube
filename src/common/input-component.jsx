import React, { Component } from "react";
function Input(props) {
 
    const { type, value, onChange,id,placeholder, className } = props;

    return (
      <input
        type={type}
        onChange={onChange}
        className={className}
        id={id}
        value={value}
        placeholder={placeholder}

      />
    );
  }

export default Input;
