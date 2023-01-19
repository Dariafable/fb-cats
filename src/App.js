import React from 'react';
import Home from './components/Home/Home';
import db from './data/cat-info.json';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='app-wrapper'>
        <Home catFood={db['cat-info']} />
      </div>
    </div>
  );
}

export default App;
