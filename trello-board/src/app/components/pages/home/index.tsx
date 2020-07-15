import React, { useState } from "react";
import "./style.scss";
import AddButton from "../../molecules/addButton";
import AddCard from "../../molecules/addCard";
import AddList from "../../molecules/addList";
import List from "../../organisms/list";
import { strings } from "../../settings/strings";

const Home = () => {
  const [cardList, setCardList] = useState([]);
  const [displayCard, setDisplayCard] = useState(false);
  const [listLabel, setListLabel] = useState("");

  const addAnotherList = () => {
    setDisplayCard(true);
  };

  const onAddList = () => {
    setDisplayCard(false);
    const obj = { title: listLabel };
    cardList.push(obj);
  };

  const onClose = () => {
    setDisplayCard(false);
  };
  const onListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListLabel(e.target.value);
  };

  return (
    <div className="container">
      {cardList.map((item) => {
        return (
          <div className="list-view">
            <List heading={item.title} />
          </div>
        );
      })}
      <div className="addlist-view">
        {displayCard ? (
          <AddList
            onClickAddList={onAddList}
            onClickClose={onClose}
            onListChange={onListChange}
          />
        ) : (
          <AddButton
            className="addbtn-view"
            addText={strings.addAnotherList}
            onClickAddButton={addAnotherList}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
