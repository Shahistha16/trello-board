import * as React from "react";
import TextArea from "../../atoms/textArea";
import Button from "../../atoms/button";
import { Typography } from "../../atoms/typography";
import "./style.scss";
import { faTimes, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { strings } from "../../settings/strings";

export interface addCardInterface {
  className?: string;
  onClickAddCard?: () => void;
  onClickClose?: () => void;
  onClickMenu?: () => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AddCard = ({
  className,
  onClickAddCard,
  onClickClose,
  onClickMenu,
  onChange,
}: addCardInterface) => {
  return (
    <div className={`addCardView ${className}`}>
      <TextArea onChange={onChange} placeholder={strings.addTitle} />
      <div className="btn-view">
        <Button className="button" onClick={onClickAddCard}>
          <Typography
            textLabel={strings.addCard}
            fontSize="s"
            fontWeight="normal"
            fontColor="white"
          />
        </Button>
        <Button className="cross-button" onClick={onClickClose}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Button className="menu-button" onClick={onClickMenu}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
