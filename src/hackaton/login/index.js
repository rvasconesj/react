import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import './index.css'

const Login = ({ setToken }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await login({
            username,
            password
        });
        console.log(token)
        setToken(token)
        history.push("/dashboard");

    }
    return (
        <div className="login-wrapper">
            <div>
                <h2>Please Login in</h2>
            </div>
            <div>
               <form onSubmit={handleSubmit} >
                   <label>
                       <p>Username</p>
                       <input type="text"/>
                   </label>
                   <label>
                       <p>Password</p>
                       <input type="password"/>
                   </label> 
                   <div>
                       <button type="submit"> Sign in</button>
                       </div>                  
                   </form> 
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;