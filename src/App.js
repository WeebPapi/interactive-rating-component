import './App.css';
import React from 'react'
import {Card, ThankYou} from '../src/components'

function App() {
  const [rated, setRated] = React.useState(0)
  return (
    <div className="App flex__center app__bg">
      {rated === 0 ? <Card rated={rated} setRated={setRated}/> :<ThankYou val={rated}/> }     
    </div>
  );
}

export default App;
