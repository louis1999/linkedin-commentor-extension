import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import ReactRouter from './components/Router/ReactRouter';



function App() {
  return (
    <div>
      <BrowserRouter>
        <ReactRouter/>

      </BrowserRouter>    
    </div>
  );
}

export default App;
