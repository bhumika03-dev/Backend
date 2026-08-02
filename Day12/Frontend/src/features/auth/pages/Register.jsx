import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <main>
       < div className="form-container">
         <h1>Register</h1>
         <form>
           <input type="text" name="username" placeholder="Enter username" />
           <input type="email" name="email" placeholder="Enter email" />
           <input type="password" name="password" placeholder="Enter password" />
           <button type="submit">Register</button>
         </form>
         <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login here</Link></p>
       </div>
    </main>
  )
}

export default Register
