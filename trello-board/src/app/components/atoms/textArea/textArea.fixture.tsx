import * as React from "react";
import TextArea from "./index";

const TextAreaCosmos = () => {
  const onChange = () => {};
  return (
    <div>
      <TextArea
        onChange={onChange}
        placeholder="Enter a title for this card..."
      ></TextArea>
    </div>
  );
};

export default TextAreaCosmos;
