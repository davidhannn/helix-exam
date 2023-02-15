import React from "react";
import "./App.css";
import Header from "./components/features/header";
import Landing from "./components/features/landing";
import About from "./components/features/about";
import Question from "./components/features/question";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#E9E9E9",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <Header />

      <div className="body">
        <Landing />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#E9E9E9",
            marginTop: "63px",
          }}
        >
          <Question />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
