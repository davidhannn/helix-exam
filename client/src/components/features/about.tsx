import Row from "../general/row";
import BlockWrapper from "../general/block-wrapper";
import { AboutData } from "../../utils";
import "../../styles/about.scss";

const aboutRowTextStyle = {
  // fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center",
  marginLeft: 14,
  color: "#51646D",
};

const About: React.FC = () => {
  return (
    <BlockWrapper>
      <>
        <h2 className="aboutHeaderText">About</h2>

        <div className="aboutRowContainer">
          {AboutData.map(({ count, text, icon }) => (
            <Row
              text={`${count ?? ""} ${text}`}
              svg={icon}
              textStyle={aboutRowTextStyle}
            />
          ))}
        </div>
      </>
    </BlockWrapper>
  );
};

export default About;
