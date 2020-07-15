import * as React from "react";
import Button from "../../atoms/button";
import { Typography } from "../../atoms/typography";
import "./style.scss";

export interface cardInterface {
  text: string;
}

const SaveCard = ({ text }: cardInterface) => {
  return (
    <div className="text-card">
      <Button className="card-view">
        <Typography textLabel={text} />
      </Button>
    </div>
  );
};

export default SaveCard;
