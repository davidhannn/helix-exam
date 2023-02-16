import React, { useContext } from "react";
import { QuestionContext } from "../../context/questionContext";
import { DisplayEnum } from "../../constants/enums";
import GeneralButton from "../general/general-button";

const Header: React.FC = () => {
  const { handleClick } = useContext(QuestionContext);

  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        height: "90px",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <GeneralButton
        text="Ask a Question"
        handleClick={() => handleClick(DisplayEnum.QUESTION)}
      />
    </div>
  );
};

export default Header;
