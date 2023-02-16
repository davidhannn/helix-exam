import React from "react";
import GeneralButton from "../general/general-button";

const Header: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        height: "90px",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <GeneralButton text="Ask a Question" />
    </div>
  );
};

export default Header;
