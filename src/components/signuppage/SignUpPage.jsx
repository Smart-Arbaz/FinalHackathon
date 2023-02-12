import React from 'react'
import './signupstyle.css'
import { NavLink } from 'react-router-dom'


const SignUpPage = () => {
  return (
    <div className='initbox'> 
        <div className='startbox'> 
          <h1 className='firstheading'> SAYLAANI WELFARE </h1>
          <h4 className='secondheading'> ONLINE DISCOUNT STORE </h4>
         <div >
         <form className='formdeco'>
                <input type='text' placeholder='Full Name' />
                <input type='text' placeholder='Contact' />
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
         </form>
         </div>
         <div  style={{marginLeft:'100px'}}> <button className='startbtn'> Sign Up </button></div>
         <div> <h5 className='secondheading'> Already have an account ? <NavLink to='/loginpage'> Login </NavLink></h5>
         </div>
         
         </div>
         
         </div>
          
        




    
  )
}

export default SignUpPage