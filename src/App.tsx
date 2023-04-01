import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import ReactRouter from './components/Router/ReactRouter';
import '@coreui/coreui/dist/css/coreui.min.css'



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
