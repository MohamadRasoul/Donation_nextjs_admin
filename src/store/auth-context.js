import React, { useState, useEffect, useCallback } from 'react'

let logoutTimer

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
})

export const AuthContextProvider = props => {
    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])
    const userIsLoggedIn = !!token

    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
    }, [])

    const loginHandler = token => {
        console.log(token)
        setToken(token)
        localStorage.setItem('token', token)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
