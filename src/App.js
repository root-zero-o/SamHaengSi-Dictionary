import React from 'react';
import "./App.css";
import Home from './pages/home';
import Input from './pages/input';
import Detail from './pages/detail';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/input" element={<Input/>}/>
      <Route path="/detail/:detail"element={<Detail/>}></Route>
    </Routes>
  );
}


export default App