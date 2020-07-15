import * as React from "react";
import "./style.scss";
export type textSizeType = "base" | "xs" | "s" | "m" | "l" | "xl";
export type textColorType = "white" | "black" | "grey" | "blue";
export type textWeightType = "normal" | "bold";

export interface typographyProps {
  fontSize?: textSizeType;
  fontColor?: textColorType;
  fontWeight?: textWeightType;
  textLabel: string;
  className?: string;
}

export interface textprops {
  textLabel: string;
  className?: string;
}

const Typography = ({
  fontSize = "base",
  fontWeight = "normal",
  fontColor = "black",
  textLabel,
  className,
}: typographyProps) => {
  let fontSizeClass = `${`text_${fontSize}`}`;
  let fontWeightClass = `${`text_${fontWeight}`}`;
  let fontColorClass = `${`text_${fontColor}`}`;
  let fontClass = `${fontSizeClass} ${fontWeightClass} ${fontColorClass} ${className}`;
  return <div className={fontClass}>{textLabel}</div>;
};

const Text = ({ textLabel, className }: textprops) => {
  return <span className={className}>{textLabel}</span>;
};

const Header = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h1 className={className}>{textLabel}</h1>
    </div>
  );
};

const Title = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h2 className={className}>{textLabel}</h2>
    </div>
  );
};

const SubTitle = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h3 className={className}>{textLabel}</h3>
    </div>
  );
};

const HeaderFour = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h4 className={className}>{textLabel}</h4>
    </div>
  );
};

const HeaderFive = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h5 className={className}>{textLabel}</h5>
    </div>
  );
};

const HeaderSix = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <h6 className={className}>{textLabel}</h6>
    </div>
  );
};
const Paragraph = ({ textLabel, className }: textprops) => {
  return (
    <div>
      <p className={className}>{textLabel}</p>
    </div>
  );
};

export {
  Typography,
  Title,
  SubTitle,
  Text,
  Header,
  HeaderFour,
  HeaderFive,
  HeaderSix,
  Paragraph,
};
