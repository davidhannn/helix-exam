import BlockWrapper from "../general/block-wrapper";
import { ExpertData } from "../../utils";
import "../../styles/about.scss";
import { ExpertDataProps } from "../../utils";
import AvatarRow from "../general/avatar-row";

const headerTextStyle = {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center",
  marginLeft: 14,
  color: "#6074DD",
};

const subHeaderTextStyle = {
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "21px",
  textAlign: "center",
  color: "#969696",
};

const Exports: React.FC = () => {
  return (
    <BlockWrapper>
      <>
        <h2 className="aboutHeaderText">About</h2>

        <div className="aboutRowContainer">
          {ExpertData.map(
            ({ avatar, title, upvotes, collected }: ExpertDataProps) => (
              <AvatarRow
                avatar={avatar}
                title={title}
                subTitle={upvotes}
                headerTextStyle={headerTextStyle}
                subHeaderTextStyle={subHeaderTextStyle}
                upvotes={upvotes}
                collected={collected}
              />
            )
          )}
        </div>
      </>
    </BlockWrapper>
  );
};

export default Exports;
