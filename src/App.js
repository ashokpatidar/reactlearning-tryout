import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FaRegClock, FaAmazon} from 'react-icons/fa'
import {FaAngellist} from 'react-icons/fa'
import {IconContext} from 'react-icons'

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{color:'blue', size:'30rem'}}>
        <FaRegClock color='purple' size='10rem'/>
        <FaAmazon color='orange' size='20rem'/>
        <FaAngellist/>
      </IconContext.Provider>
    </div>
  );
}

export default App;
