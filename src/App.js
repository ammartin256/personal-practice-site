import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ConstructionPage from './pages/Construction/ConstructionPage';
import RetroPage from './pages/Retro/RetroPage'
import NavBar from "./shared/components/NavBar";

export default function App() {
  return (
    <div>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/construction' element={<ConstructionPage/>} />
        <Route exact path='/retro' element={<RetroPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}