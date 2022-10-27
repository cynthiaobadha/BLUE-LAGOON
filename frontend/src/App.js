import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar'
import CreateUser from './component/patients/user';
import LoginForm from './component/doctors/loginForm';
import Hero from './component/hero/Hero'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/CreateUser" element={<CreateUser/>}/>
    <Route path="/LoginForm" element={<LoginForm/>}/>
    </Routes>
    <Hero/>
    </BrowserRouter>
  );
}

export default App;
