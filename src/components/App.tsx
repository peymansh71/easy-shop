import React from "react";
import "./App.scss";
import Main from "./Main";
import AccessControl from "./AccessControl";

const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      <AccessControl />
    </div>
  );
};

export default App;
