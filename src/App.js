import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

function App() {
  const [data, setData] = useState({ input1: '000', input2: '000', input3: '000', input4: '000' })
  let spanStyle = {
    "margin": "10px",
    "padding": "10px",
    "border": "1px solid black",
    "border-radius": "5px",
  }

  useEffect(() => {
    socket.on('receive_values', (data) => {
      setData(data);
    })
  }, [socket])

  return (
    <div className="App">
      <h3>values</h3>
      <span style={spanStyle}>{data.input1}</span>
      <span style={spanStyle}>{data.input2}</span>
      <span style={spanStyle}>{data.input3}</span>
      <span style={spanStyle}>{data.input4}</span>
    </div>
  );
}

export default App;
