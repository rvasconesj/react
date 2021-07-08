  
import { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        console.log('tokenString', tokenString)
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(useToken.token)
    }

    return {
        setToken: saveToken,
        token
    }

}

export default useToken;