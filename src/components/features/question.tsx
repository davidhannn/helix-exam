import { FormEvent } from "react";

import CloseSvg from "../../images/CircleX.svg";
import "../../styles/question.scss";
import BlockWrapper from "../general/block-wrapper";

const Question: React.FC = () => {
  return (
    <BlockWrapper>
      <div className="questionHeader">
        <h3 className="questionHeaderText">New Question</h3>
        <img src={CloseSvg} />
      </div>

      <div className="questionInputSection">
        <input type="text" placeholder="Enter the question title"></input>
        <input type="text" placeholder="Write your question here"></input>
      </div>
    </BlockWrapper>
  );
};

export default Question;
