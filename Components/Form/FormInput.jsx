import { Input } from "antd";
import React from "react";

const FormInput = ({ label, name, type = "text", style = {}, ...props }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Input
        type={type}
        name={name || label}
        id={label}
        {...props}
        style={style}
      />
    </div>
  );
};

export { FormInput };
