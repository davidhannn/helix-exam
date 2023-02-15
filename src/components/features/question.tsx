import CloseSvg from "../../images/CircleX.svg";
import styles from "../../styles/question.module.css";
import BlockWrapper from "../general/block-wrapper";

const Question: React.FC = () => {
  return (
    <BlockWrapper>
      <div className={styles.questionHeader}>
        <h3 className={styles.questionHeaderText}>New Question</h3>
        <img src={CloseSvg} />
      </div>
    </BlockWrapper>
  );
};

export default Question;
