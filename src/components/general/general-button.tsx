import React from "react";
import styles from "../../styles/button.module.css";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

type Props = {
  text: string;
};

const GeneralButton: React.FC<ButtonProps & { text: string }> = ({
  text,
  ...rest
}: Props) => {
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};

export default GeneralButton;
