import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Card, ThankYou} from '../src/components'

function App() {
  const [rated, setRated] = React.useState(false)
  return (
    <div className="App flex__center app__bg">
      {rated ? <ThankYou /> : <Card />}
      
    </div>
  );
}

export default App;
