import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Youtube from './common/youtube-component';
function App() {
  return (
    <Routes>
      <Route path="/youtube" element={ <Youtube/>} />
    </Routes>
   
  );
}

export default App;
