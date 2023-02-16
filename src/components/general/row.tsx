import React from "react";
import "../../styles/row.scss";

type Props = {
  svg?: string;
  text: string;
  textStyle?: any;
};

const Row: React.FC<Props> = ({ svg, text, textStyle }: Props) => {
  return (
    <div className="rowContainer">
      <img src={svg} alt={`${text}-img`} style={{ verticalAlign: "middle" }} />
      <span style={textStyle ?? {}}>{text}</span>
    </div>
  );
};

export default Row;
