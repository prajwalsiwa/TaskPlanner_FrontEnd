import React from 'react'
import './index.css'

const ForgotPassword= () => {
    const handleSubmit = () => {

    }

  return (
    <div className='Forgot-Pass'>
        <form className='forgot-form' onSubmit={handleSubmit}>
        <h1 className='heading'>Forgot password?</h1>
        <br />
        <h2 className='heading'>Verify Your identity</h2>
        <br />
        <h4 className='text'>We've sent a text message to:</h4>
        <h4 className='text'> Enter the 4-digit code</h4>
        <input type="number" name="" id="" max={4} placeholder='####'/>
        <button className='Continue' type='submit'>Continue</button>
        <h4 className='Resend'> Didn't recieve a code ? <a href="/forgotpassword">Resend</a> </h4>
        </form>

      
    </div>
  )
}

export default ForgotPassword
