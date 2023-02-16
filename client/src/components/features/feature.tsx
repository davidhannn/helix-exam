import { useContext } from "react";
import { DisplayEnum } from "../../constants/enums";
import { QuestionContext } from "../../context/questionContext";
import Question from "./question";
import About from "./about";
import Response from "./response/response";
import Experts from "./experts";

const Feature: React.FC = () => {
  const { display } = useContext(QuestionContext);

  const showDisplay = (type: DisplayEnum) => {
    switch (type) {
      case DisplayEnum.QUESTION:
        return <Question />;
      case DisplayEnum.RESPONSE:
        return <Response />;
      default:
        return <></>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#E9E9E9",
        marginTop: "63px",
      }}
    >
      <div
        style={
          display === DisplayEnum.QUESTION
            ? {
                width: "70%",
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "center",
              }
            : { width: "70%" }
        }
      >
        {showDisplay(display)}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "27%",
        }}
      >
        <About />
        <Experts />
      </div>
    </div>
  );
};

export default Feature;
