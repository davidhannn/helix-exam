import React from "react";
// import css from "../styles/colors.css";
// const styles = css as any;

const Header: React.FC = () => {
  return (
    <div
      style={{
        marginLeft: "auto",
        backgroundColor: "#D9D9D9",
        height: "90px",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <button
        // style={styles.button}
        style={{
          fontSize: "12",
          borderRadius: "25px",
          padding: "8px 12px",
          backgroundColor: "#6074DD",
        }}
      >
        Ask a question
      </button>
    </div>
  );
};

export default Header;
