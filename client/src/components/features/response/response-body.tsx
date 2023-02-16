import ExpertSvg from "../../../images/Expert.svg";

import { ResponseDataProps } from "~/utils";

const ResponseBody = ({
  title,
  question,
  username,
  answerCount,
  questionCount,
}: ResponseDataProps) => {
  return (
    <div>
      <p
        style={{
          fontWeight: 700,
          lineHeight: "24px",
          fontSize: "16px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontWeight: 400,
          lineHeight: "24px",
          fontSize: "16px",
          marginTop: "12px",
        }}
      >
        {question}
      </p>

      <hr
        className="solid"
        style={{
          marginTop: 24,
          marginBottom: 24,
          color: "1px solid #DEDEDE",
        }}
      />

      <p
        style={{
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "14px",
          marginBottom: "8px",
        }}
      >
        Asked by:
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img src={ExpertSvg} alt={"expert-img"} />

        <div
          style={{
            marginLeft: 14,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              marginLeft: 14,
              color: "#6074DD",
            }}
          >
            {username}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              textAlign: "center",
              color: "#969696",
            }}
          >
            {" "}
            {answerCount} Answers {questionCount} Question
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResponseBody;
