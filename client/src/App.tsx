import "./App.scss";

import Feature from "./components/features/feature";
import Header from "./components/features/header";
import Landing from "./components/features/landing";
import QuestionProvider from "./context/questionContext";

function App() {
  return (
    <QuestionProvider>
      <div className="app">
        <Header />
        <div className="body">
          <Landing />
          <Feature />
        </div>
      </div>
    </QuestionProvider>
  );
}

export default App;
