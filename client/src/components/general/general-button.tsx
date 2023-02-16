import React from "react";
import "../../styles/button.scss";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

type Props = {
  text: string;
  handleClick?: () => void;
};

const GeneralButton: React.FC<
  ButtonProps & { text: string; handleClick: () => void }
> = ({ text, handleClick, ...rest }: Props) => {
  return (
    <button
      className="button"
      {...rest}
      style={{ color: "white" }}
      onClick={handleClick}
    >
      <span className="buttonText">{text}</span>
    </button>
  );
};

export default GeneralButton;
