import * as React from "react";
import Button from "../../atoms/button";
import { Typography } from "../../atoms/typography";
import "./style.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextBox from "../../atoms/textBox";
import { strings } from "../../settings/strings";

export interface addListInterface {
  className?: string;
  onClickAddList?: () => void;
  onClickClose?: () => void;
  onListChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddList = ({
  className,
  onClickAddList,
  onClickClose,
  onListChange,
}: addListInterface) => {
  return (
    <div className={`addCardView ${className}`}>
      <TextBox onChange={onListChange} placeholder={strings.addTitle} />
      <div className="btn-view">
        <Button className="button" onClick={onClickAddList}>
          <Typography
            textLabel={strings.addList}
            fontSize="s"
            fontWeight="normal"
            fontColor="white"
          />
        </Button>
        <Button className="cross-button" onClick={onClickClose}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};

export default AddList;
