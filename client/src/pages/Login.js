import React from 'react'
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useAuthContext } from '../hooks/useAuthContext'
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)

        if (!error) {
          navigate('/');
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        
        <label>Email address:</label>
        <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
        />
        <label>Password:</label>
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
        />

        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
        </form>
        
    )
}

export default Login