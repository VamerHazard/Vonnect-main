import React, {useState, useEffect} from 'react';
import {LoadPage, TypeReg, CustomerRegistration, CompanyRegistration, CustomerRegistrationOTP, CustomerHome} from './containers';
import {ProfileEdit, Chef, Cleaners, Drivers, Electrician, Gardeners, Grocery, Painter, Plumber, Tutors} from './components';
import {ChefAvailable, CleanersAvailable, DriversAvailable, ElectricianAvailable, GardenersAvailable, GroceryAvailable, PainterAvailable, PlumberAvailable, TutorsAvailable, ServiceAvailable} from './components'
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const App = () => {

const [loading, setloading] = useState(false);

useEffect(()=>{
  setloading(true)
  setTimeout(()=>{setloading(false)}, 1000) /*change later */
}, []);

  return (
    <div className = 'App'>
     {loading ? <LoadPage/> 
    : 
    <Routes>
            <Route path='/' element={<TypeReg/>}/>  
            <Route path='/CustomerRegistration' element={<CustomerRegistration/>}/>
            <Route path='/CustomerRegistration/:id' element={<CustomerRegistrationOTP/>}/>
            {/*temporary route to component: */} 
            <Route path='/CustomerRegistration/:id/profileEdit' element={<ProfileEdit/>}/>
            <Route path='/home' element={<CustomerHome/>}/>

          {/* Service Types: */}
            <Route path='/Chef'>
              <Route path='ChefServices' element={<Chef/>}/>
              <Route path='ChefAvailable' element={<ChefAvailable/>}/>
            </Route>
            <Route path='/Cleaners'>
              <Route path='CleanersServices' element={<Cleaners/>}/>
              <Route path='CleanersAvailable' element={<CleanersAvailable/>}/>
            </Route>
            <Route path='/Drivers'>
              <Route path='DriversServices' element={<Drivers/>}/>
              <Route path='DriversAvailable' element={<DriversAvailable/>}/>
            </Route>
            <Route path='/Electrician'>
              <Route path='ElectricianServices' element={<Electrician/>}/>
              <Route path='ElectricianAvailable' element={<ElectricianAvailable/>}/>
            </Route>
            <Route path='/Gardeners'>
              <Route path='GardenersServices' element={<Gardeners/>}/>
              <Route path='GardenersAvailable' element={<GardenersAvailable/>}/>
            </Route>
            <Route path='/Grocery'>
              <Route path='GroceryServices' element={<Grocery/>}/>
              <Route path='GroceryAvailable' element={<GroceryAvailable/>}/>
            </Route>
            <Route path='/Painter'>
              <Route path='PainterServices' element={<Painter/>}/>
              <Route path='PainterAvailable' element={<PainterAvailable/>}/>
            </Route>
            <Route path='/Plumber'>
              <Route path='PlumberServices' element={<Plumber/>}/>
              <Route path='PlumberAvailable' element={<PlumberAvailable/>}/>
            </Route>
            <Route path='/Tutors'>
              <Route path='TutorsServices' element={<Tutors/>}/>
              <Route path='TutorsAvailable' element={<TutorsAvailable/>}/>
            </Route>
    </Routes>
   }
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