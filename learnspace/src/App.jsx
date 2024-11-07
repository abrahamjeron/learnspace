import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Modules from "./Pages/modulespage";
import Quiz from './Pages/quiz';

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/modules' element={<Modules/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </>
  )
}

export default App
