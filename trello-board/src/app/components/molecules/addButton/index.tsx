import * as React from "react";
import Button from "../../atoms/button";
import { faPlus, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../../atoms/typography";
import "./style.scss";

export interface addButtonInterface {
  className?: string;
  onClickAddButton?: () => void;
  addText: string;
}

const AddButton = ({
  className,
  addText,
  onClickAddButton,
}: addButtonInterface) => {
  return (
    <div className={`addBtn-view ${className}`}>
      <Button className="add-btn" onClick={onClickAddButton}>
        <div className="add-icon">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <Typography
          textLabel={addText}
          fontSize="s"
          fontWeight="normal"
          fontColor="grey"
        />
      </Button>
    </div>
  );
};

export default AddButton;
