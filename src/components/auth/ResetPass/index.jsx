import React from 'react'
import './index.css'

const ResetPassword = () => {
  return (
    <div className='Reset-Pass'>
        <form className='reset-form' >
            <h1 className='heading'>Reset account password</h1>
            <h4 className='text'>Enter a new password to reset</h4>
            <input type="text" placeholder='Enter new password' />
            <input type="text" placeholder='Confirm password' />
            <button className='Confirm'>Reset Password</button>
        </form>
      
    </div>
  )
}

export default ResetPassword
