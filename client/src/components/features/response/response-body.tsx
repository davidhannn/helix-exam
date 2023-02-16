import ExpertSvg from "../../../images/Expert.svg";

import { ResponseDataProps } from "~/utils";

const ResponseBody = (data: any) => {
  console.log(data);
  const { title, question, username, answerCount, questionCount } = data;
  // console.log(data.question, "data");
  console.log(title, "data");
  return (
    <div>
      <p
        style={{
          fontWeight: 700,
          lineHeight: "24px",
          fontSize: "16px",
        }}
      >
        {/* {data.title} */}
        MongoDB how to search by using regex but avoiding case sensitive?
      </p>
      <p
        style={{
          fontWeight: 400,
          lineHeight: "24px",
          fontSize: "16px",
          marginTop: "12px",
        }}
      >
        It allows users anywhere in the world to trade crypto without an
        intermediary. UNI, the governance token that allows users to vote on key
        protocol changes, is one of the largest cryptocurrencies by market cap..
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
        <img
          src={ExpertSvg}
          alt={"expert-img"}
          // style={{ marginTop: "8px" }}
        />

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
            Pseudo Near Expert
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
            2 Answers 1 Question
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResponseBody;
