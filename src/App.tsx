import React from "react";
import "./App.scss";
import Header from "./components/features/header";
import Landing from "./components/features/landing";
import About from "./components/features/about";
import Experts from "./components/features/experts";
import Question from "./components/features/question";

function App() {
  return (
    <div
      className="app"
      // style={{
      //   backgroundColor: "#E9E9E9",

      // }}
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <About />
            <Experts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
