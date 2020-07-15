import * as React from "react";
import "./style.scss";

export interface textboxInterface {
  className?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ className, placeholder, onChange }: textboxInterface) => (
  <div>
    <textarea
      className={`textAreaView ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextArea;
