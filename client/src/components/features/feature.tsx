import { useContext } from "react";
import { QuestionContext } from "../../context/questionContext";
import Question from "./question";
import About from "./about";
import Response from "./response/response";
import Experts from "./experts";

const Feature: React.FC = () => {
  const { display } = useContext(QuestionContext);

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
      <Response />
      {/* {display && <Question />} */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <About />
        <Experts />
      </div>
    </div>
  );
};

export default Feature;
