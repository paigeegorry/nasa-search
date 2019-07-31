import React from 'react';
import Input from '../Input';
import Images from '../images/Images';
import Keywords from '../Keywords';
import './App.scss'

function App() {
  return (
    <div className="container">
      <h1>NASA Search</h1>
      <Input />
      <Keywords />
      <Images />
    </div>
  );
}

export default App;
