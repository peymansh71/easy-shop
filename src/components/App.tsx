import React from 'react';
import './App.css';
import Dashboard from './dashboard';
import Result from './Result';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
      <Result />
    </div>
  );
}

export default App;
