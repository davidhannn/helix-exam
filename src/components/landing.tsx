import ProtocolSvg from "../images/Protocol.svg";

const Landing: React.FC = () => {
  return (
    <div
      style={{
        background: "#969696",
        width: "1120px",
        height: "242px",
        borderRadius: "32px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={ProtocolSvg} />
      <h3
        style={{
          fontWeight: "700",
          fontSize: "32",
          lineHeight: "40px",
          color: "#34324C",
        }}
      >
        Near Protocol
      </h3>
    </div>
  );
};

export default Landing;
