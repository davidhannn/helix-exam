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
};

// TODO Fix Button text color
const GeneralButton: React.FC<ButtonProps & { text: string }> = ({
  text,
  ...rest
}: Props) => {
  return (
    <button className="button" {...rest}>
      <span className="buttonText">{text}</span>
    </button>
  );
};

export default GeneralButton;
