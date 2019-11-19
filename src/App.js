import './App.css';

import Button from '@material-ui/core/Button';
import React from 'react';
import Register from './Components/Register';

//import Events from './Components/Events';




//import Nav from './Components/Nav'
//import Card from './Components/Card';




function App() {
  return (
    <div className="App">
    {/*<Nav/>*/}
    <Register/>
    <header className="App-header">
    <Button variant="contained" color="primary">
      Hello Event Calendar
    </Button>
      </header>
    </div>
  );
}

export default App;
