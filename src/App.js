import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import React , { useState } from 'react';

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
        <Input showDiv={showDiv}/>
        <Button />
    </div>
  );
}

export default App;
