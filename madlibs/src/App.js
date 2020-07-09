import React from 'react';

import './App.css';
import MadlibContainer from './components/MadibContainer'
import {MadlibProvider} from './context/madlibprovider'
import {ToggleProvider} from './context/toggleprovider'
function App() {
  return (
    <MadlibProvider>
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ToggleProvider>
      <MadlibContainer/>
      </ToggleProvider>
     
    </div>
    </MadlibProvider>
  );
}

export default App;
