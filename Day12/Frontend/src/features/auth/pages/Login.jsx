import React,{useState} from 'react'
import '../styles/form.scss'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'

const Login = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
   const navigate = useNavigate();
  const {handleLogin, loading} = useAuth();

  async function handleSubmit(e){
    e.preventDefault()
    setError("")

    try {
      const res = await handleLogin(username, password)
      console.log(res);
      navigate("/feed");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    }
  }
    if(loading){
      return (<main>
        <h1>Loading...</h1>
      </main>)
    }
  
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"  name="username" placeholder="Enter username" value={username} onInput={(e)=> setUsername(e.target.value) } />
            <input type="password" name="password" placeholder="Enter password" value={password} onInput={(e)=> setPassword(e.target.value) } />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
        </form>
        {error && <p className="form-error">{error}</p>}
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register here</Link></p>
      </div>
    </main>
  )
}

export default Login
