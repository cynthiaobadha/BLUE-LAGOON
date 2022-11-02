import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import CreateUser from './component/Pages/user';
import Doctors from './component/Pages/loginForm'
import Hero from './component/Hero'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/CreateUser" element={<CreateUser/>}/>
    <Route path="/Doctors" element={<Doctors/>}/>
    </Routes>
    <Hero/>
    </BrowserRouter>
  );
}

export default App;
