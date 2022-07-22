import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useAuth = ({ middleware } = {}) => {
    const router = useRouter()

    const { data: user, error, revalidate } = useSWR('auth/profile', () =>
        axios
            .get('auth/profile')
            .then(res => {
                return res.data.data.user
            })
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const register = async ({ setErrors, ...props }) => {
        setErrors([])

        axios
            .post(`auth/register/0`, props)
            .then(res => {
                localStorage.setItem('token', res.data.data.access_token)
                window.location.pathname = '/admin/dashboard'

                return revalidate()
            })
            .catch(error => {
                // if (error.response.status !== 422) throw error
                // setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        setErrors([])
        setStatus(null)

        axios
            .post(`auth/login/0`, props)
            .then(res => {
                localStorage.setItem('token', res.data.data.access_token)
                window.location.pathname = '/admin/dashboard'

                return revalidate()
            })
            .catch(error => {
                // if (error.response.status !== 422) throw error
                // setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        if (!error) {
            await axios.get('auth/logout')
            localStorage.removeItem('token')

            revalidate()
        }

        window.location.pathname = '/'
    }

    useEffect(() => {
        console.log(user)

        // for index page
        if (!middleware) {
            console.log(1)
            if (user) {
                console.log(1.1)
                router.push('/admin/dashboard')
            } else {
                console.log(1.2)
                router.push('/admin/login')
            }
        }

        // for login/signup page
        else if (middleware === 'guest') {
            if (user) {
                console.log(2)
                router.push('/admin/dashboard')
            }
        }

        // for all other page
        else if (middleware === 'auth') {
            console.log(3)
            if (!user) {
                router.push('/admin/login')
            }
            if (error) logout()
        }
    }, [user, error])

    return {
        user,
        register,
        login,
        logout,
    }
}

export default useAuth
