import { useState } from 'react';

import convert from './convert'
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('...');
  const [inputValue, setInputValue] = useState('');

  const handleConvert = () => {
    if (!inputValue) {
      return;
    }

    const result = convert(inputValue); // .replaceAll(' ', ''));
    setResult(result);
  }

  const handleReset = () => {
    setResult('...');
    setInputValue('');
  }

  const handleChange = (value) => {
    if (value < 0) {
      return;
    }

    setInputValue(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex' }}>
          <input type='number' style={{ marginRight: '10px', width: '400px' }} onChange={e => handleChange(e.target.value)} value={inputValue} placeholder='please input number' />
          <button onClick={handleConvert} style={{ marginRight: '10px' }}>Convert</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <p style={{ marginBottom: '0px' }}>Results :</p>
        <p data-testid="result">" {result} "</p>
      </header>
    </div>
  );
}

export default App;
