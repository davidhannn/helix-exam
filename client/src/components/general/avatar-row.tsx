import React from "react";
import UpvoteSvg from "../../images/Upvote.svg";
import "../../styles/row.scss";

type Props = {
  avatar?: string;
  title?: string;
  subTitle?: string | number;
  headerTextStyle?: any;
  subHeaderTextStyle?: any;
  upvotes?: number;
  collected?: boolean;
};

const AvatarRow: React.FC<Props> = ({
  avatar,
  title,
  headerTextStyle,
  subHeaderTextStyle,
  subTitle,
  upvotes,
  collected,
}: Props) => {
  console.log(collected);
  return (
    <div
      // className="avatarRowContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "24px",
      }}
    >
      <img
        src={avatar}
        alt={`${title}-img`}
        style={{ verticalAlign: "center" }}
      />

      <div
        // className="rowTextContainer"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={headerTextStyle ?? {}}>{title}</span>
        <div
          style={{
            marginLeft: 14,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <span style={subHeaderTextStyle ?? {}}>{subTitle}</span>
          <img
            src={UpvoteSvg}
            alt={"upvote-img"}
            style={{ marginLeft: 4, marginRight: 14 }}
          />

          <span style={subHeaderTextStyle ?? {}}>
            {collected ? "collected" : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AvatarRow;
