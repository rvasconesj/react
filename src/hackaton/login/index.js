  
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import  './index.css'

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    let history = useHistory();
    let container
    const signUpButton = () => {
        container = document.getElementById('container');
        container.classList.add('right-panel-active')
    }
    const signInButton = () => {
        container = document.getElementById('container');
        container.classList.remove('right-panel-active')
    }

    const login = async (credentials) => {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        console.log(response)

        return response.json();
    }

    const register = async (credentials) => {
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        signInButton();
        return response.json();
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const token = await login({
            username,
            password
        });
        console.log(token)
        setToken(token)
        history.push("/dashboard");
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const signup = await register({
            username,
            email,
            password
        });
        return signup;
    }
    return (
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleRegister}>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social">
                        <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <span>Or use your email for registration</span>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Sign up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social">
                        <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <span>Or use your account</span>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome back!</h1>
                        <p>To keep connected with us please login with your personal information.</p>
                        <button className="ghost" id="signIn" onClick={signInButton}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal dietails and start the journey with us.</p>
                        <button className="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;