import Row from "../general/row";
import BlockWrapper from "../general/block-wrapper";
import { AboutData } from "../../utils";

const About: React.FC = () => {
  return (
    <BlockWrapper>
      <h2>About</h2>

      <div>
        {AboutData.map(({ text, icon }) => (
          <Row text={text} svg={icon} />
        ))}
      </div>
    </BlockWrapper>
  );
};

export default About;
