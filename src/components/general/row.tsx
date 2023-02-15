import React from "react";

type Props = {
  svg?: string;
  text?: string;
};

const Row: React.FC<Props> = ({ svg, text }: Props) => {
  return (
    <div>
      <img src={svg} alt={`${text}-img`} />
      <span>{text}</span>
    </div>
  );
};

export default Row;
