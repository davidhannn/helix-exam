import BlockWrapper from "../../general/block-wrapper";
import ResponseBody from "./response-body";
import { ResponseData } from "../../../utils";

//TODO Create API Get request to fetch list of question/responses
const Response: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {ResponseData.map((item, idx) => (
        <BlockWrapper
          styles={{
            backgroundColor: "white",
            padding: 24,
            borderRadius: 25,
            marginBottom: 24,
            height: "274px",
          }}
        >
          <ResponseBody data={item} key={idx} />
        </BlockWrapper>
      ))}
    </div>
  );
};

export default Response;
