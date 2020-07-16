import React from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';
import Searcher from '../Searcher/Searcher';
import './App.css';


function App() {
  return (
    <div className="App">
      <AppToolbar/>
      <Searcher />
    </div>
  );
}

export default App;
