import React from 'react'
import './index.css'

const LogIn = () => {
  const handleSubmit = () =>{
    <>
    </>
  }
  return (

  <>
      <div className="login-container">
  <form onSubmit={handleSubmit} className='login-form'>
        <h1 className='heading'>LOGIN</h1>
       <br />
    <input type="text" placeholder='Username' className='username'/>
    <input type="password" placeholder='Password' className='password'/>
    <div className='forgot'>

    <a href="/forgotpassword" >Forgot Password?</a>
    </div>
  
   <button type="submit" className='login'>Login</button>
   <h6 className='header'>Not have an account. <a href="/register" className='' >Create one?</a> </h6>
   
  </form>
    </div>
  </>
  )
}

export default LogIn

