import React from 'react';
import './App.css';
import Activities from './Activities';
import {Header} from "semantic-ui-react";
function App() {



  return (
    <div className="App">
      <Header as="h2" icon='users'content='Reactivities' />
      <p>Get Activities:</p>
      <Activities />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
