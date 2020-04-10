import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <div>
      <Header text='hello' color="blue" />
      <Body />
    </div>
  );
}

export default App;
