import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Detail from './components/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
