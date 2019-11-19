import './App.css';

import Button from '@material-ui/core/Button';
import Events from './Components/Events';
import React from 'react';
import logo from './logo.svg';

//import Card from './Components/Card';




function App() {
  return (
    <div className="App">
    
    <Events/>

    <header className="App-header">
      <Button variant="contained" color="primary">
      Hello Event Calendar
    </Button>
      </header>
    </div>
  );
}

export default App;
