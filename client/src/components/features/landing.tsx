import ProtocolSvg from "../../images/Protocol.svg";

const Landing: React.FC = () => {
  return (
    <div
      style={{
        background: "#969696",
        height: "242px",
        borderRadius: "32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "96px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          alignItems: "center",
        }}
      >
        <img src={ProtocolSvg} alt="protocol-img" />
        <h3
          style={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "40px",
            color: "#34324C",
            marginLeft: "28px",
          }}
        >
          Near Protocol
        </h3>
      </div>
    </div>
  );
};

export default Landing;
