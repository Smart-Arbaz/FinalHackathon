import React from 'react'
import './loginstyle.css'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='initbox'> 
        <div className='startbox'> 
          <h1 className='firstheading'> SAYLAANI WELFARE </h1>
          <h4 className='secondheading'> ONLINE DISCOUNT STORE </h4>
         <div >
         <form className='formdeco'>
                <input type='email' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
         </form>
         <div> <h5 className='secondheading'> Forgot Password ? </h5>
         </div>
         </div>
         <div  style={{marginTop:'20px', marginLeft:'100px'}}> <button className='startbtn'> Sign Up </button></div>
         <div> <h5 className='secondheading'> Don't have an account ? <NavLink to='/signUpPage'> Register </NavLink>  </h5>
         </div>
         
         </div>
         
         </div>
  )
}

export default LoginPage