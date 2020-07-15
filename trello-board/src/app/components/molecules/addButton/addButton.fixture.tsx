import * as React from "react";
import AddButton from "./index";
import { strings } from "../../settings/strings";

const AddButtonCosmos = () => {
  return (
    <div>
      <AddButton addText={strings.addCard}></AddButton>
    </div>
  );
};

export default AddButtonCosmos;
