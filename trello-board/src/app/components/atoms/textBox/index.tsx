import * as React from "react";
import "./style.scss";

export interface textboxInterface {
  className?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextBox = ({ className, placeholder, onChange }: textboxInterface) => (
  <div>
    <input
      className={`textboxView ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextBox;
