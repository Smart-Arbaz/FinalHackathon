import React from 'react';
import './startstyle.css';
import logo from './startimg.jpeg'
import { NavLink } from 'react-router-dom';


const GetStarted = () => {
  return (
    <div className='initbox'>
    <div className='startbox'>
        <div> <img src={logo} alt='' />  </div>
        <div> 
            <h1 className='firstheading'> Saylaani Welfare </h1>
            <h4 className='secondheading'> Online Discount Store </h4>
         </div>
        <div>
            <button className='startbtn'> <NavLink to='/signUpPage'>Get Started</NavLink></button>
        </div>
    </div>
    </div>
  )
}

export default GetStarted