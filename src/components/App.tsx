import React from "react";
import "./App.scss";
import View from "./Roles/View";
import AccessControl from "./Roles/AccessControl";
import History from "./Roles/History";

const App: React.FC = () => {
  return (
    <div className="App roles">
      <div className="roles__main">
        <span>VIEW ROLES</span>
        <View />
      </div>

      <div className="roles__access-control">
        <span>ACCESS CONTROL</span>
        <AccessControl />
      </div>

      <div className="roles__history">
        <span>HISTORY</span>
        <History />
      </div>
    </div>
  );
};

export default App;
