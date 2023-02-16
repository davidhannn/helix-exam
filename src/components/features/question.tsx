import { QuestionContext } from "../../context/questionContext";
import ImagesSvg from "../../images/Images.svg";
import CloseSvg from "../../images/CircleX.svg";
import "../../styles/question.scss";
import GeneralButton from "../general/general-button";
import BlockWrapper from "../general/block-wrapper";
import { useContext } from "react";

const questionStyles = {
  backgroundColor: "white",
  padding: 24,
  borderRadius: 25,
  marginBottom: 24,
  width: "510px",
  height: "424px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const Question: React.FC = () => {
  const { handleClick } = useContext(QuestionContext);
  return (
    <BlockWrapper styles={questionStyles}>
      <div
        className="questionHeader"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 className="questionHeaderText">New Question</h3>
        <img src={CloseSvg} onClick={handleClick} alt="close-button" />
      </div>

      <hr
        className="solid"
        style={{ marginTop: "24px", marginBottom: "16px" }}
      />
      <div
        //  className="questionInputSection"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          // type="text"
          placeholder="Enter the question title"
          style={{
            borderRadius: "16px",
            height: "43px",
            border: "1px solid #DEDEDE",
            padding: "8px 12px",
            fontSize: "12px",
            lineHeight: "14px",
            fontWeight: 400,
          }}
        />
        <div style={{ position: "relative" }}>
          <textarea
            // type="text"

            placeholder="Write your question here"
            style={{
              borderRadius: "16px",
              height: "250px",
              border: "1px solid #DEDEDE",
              padding: "8px 12px",
              fontSize: "12px",
              lineHeight: "14px",
              fontWeight: 400,
              marginTop: "12px",
              textAlign: "start",
              width: "100%",
            }}
          />

          <div style={{ position: "absolute", bottom: 20, right: -140 }}>
            <GeneralButton text="Post" handleClick={() => {}} />
          </div>

          {/* <hr className="solid" /> */}
          <hr className="solid" style={{ position: "absolute", bottom: 130 }} />

          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{ fontWeight: 700, fontSize: "12px", lineHeight: "14px" }}
            >
              Aa
            </span>

            <img
              src={ImagesSvg}
              style={{ marginLeft: "16px" }}
              alt={"gallery-img"}
            />
          </div>

          {/* <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "62px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <span>Aa</span>
              <img
                src={ImagesSvg}
                style={{ marginLeft: "24px" }}
                alt={"gallery-img"}
              />
            </div>

            <GeneralButton text="Post" />
          </div> */}
        </div>
      </div>
    </BlockWrapper>
  );
};

export default Question;
