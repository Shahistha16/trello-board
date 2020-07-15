import React, { useState } from "react";
import Button from "../../atoms/button";
import { Typography } from "../../atoms/typography";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import AddCard from "../../molecules/addCard";
import AddButton from "../../molecules/addButton";
import SaveCard from "../../molecules/saveCard";
import { strings } from "../../settings/strings";

export interface listProps {
  heading: string;
  className?: string;
}

const List = ({ heading, className }: listProps) => {
  const [displayCard, setDisplayCard] = useState(false);
  const [cardLabel, setCardLabel] = useState("");
  const [cardList, setCardList] = useState([]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardLabel(e.target.value);
  };

  const onClickAddButton = () => {
    setDisplayCard(true);
  };

  const onClickAddCard = () => {
    setDisplayCard(false);
    const obj = { text: cardLabel };
    cardList.push(obj);
  };

  const onClickClose = () => {
    setDisplayCard(false);
  };

  return (
    <div className={className}>
      <div className="list-view">
        <div className="header-text">
          <Typography
            textLabel={heading}
            fontSize="m"
            fontWeight="bold"
            fontColor="blue"
            className="header"
          />
          <Button className="menu-btn">
            <FontAwesomeIcon icon={faEllipsisH} />
          </Button>
        </div>
        {cardList.map((item) => {
          return (
            <div className="card-view">
              <SaveCard text={item.text} />
            </div>
          );
        })}
        {displayCard ? (
          <div>
            <AddCard
              onChange={onChange}
              onClickAddCard={onClickAddCard}
              onClickClose={onClickClose}
            />
          </div>
        ) : (
          <div className="addbtn-view">
            <AddButton
              onClickAddButton={onClickAddButton}
              addText={strings.addACard}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
