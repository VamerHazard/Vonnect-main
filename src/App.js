import React, {useState, useEffect} from 'react';
import {LoadPage, TypeReg, CustomerRegistration, CompanyRegistration, CustomerRegistrationOTP, CustomerHome} from './containers';
import {ProfileEdit} from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const App = () => {

const [loading, setloading] = useState(false);

useEffect(()=>{
  setloading(true)
  setTimeout(()=>{setloading(false)}, 3000)
}, []);

  return (
    <div className = 'App'>
     {loading ? <LoadPage/> 
    : <Routes>
            <Route path='/' element={<TypeReg/>}/>  
            <Route path='/CustomerRegistration' element={<CustomerRegistration/>}/>
            <Route path='/CustomerRegistration/:id' element={<CustomerRegistrationOTP/>}/>
            {/*temporary route to component: */} 
            <Route path='/CustomerRegistration/:id/profileEdit' element={<ProfileEdit/>}/>
            <Route path='/home' element={<CustomerHome/>}/>
    </Routes>}
    </div>
  )
}

export default App


 /* 
      <div className = "gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA />
      <Blog/>
      <Footer/>*/