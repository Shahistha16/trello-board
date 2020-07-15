import * as React from "react";
import TextBox from "./index";

const TextBoxCosmos = ({ onChange }: any) => {
  return (
    <div>
      <TextBox onChange={onChange} placeholder="Enter list title"></TextBox>
    </div>
  );
};

export default TextBoxCosmos;
