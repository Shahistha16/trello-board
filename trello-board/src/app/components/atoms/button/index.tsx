/* @flow */
import * as React from "react";

import "./style.scss";

export type buttonType = "button" | "submit" | "reset";

export interface buttonInterface {
  type?: buttonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, className, onClick, type }: buttonInterface) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn-component ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
