import './App.css';

import Button from '@material-ui/core/Button';
import Events from './Components/Events';
import React from 'react';

//import Register from './Components/Register';



function App() {
  return (
    <div className="App">
    {/*<Nav/>*/}
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
