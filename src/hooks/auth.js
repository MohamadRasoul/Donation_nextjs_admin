import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useAuth = ({ middleware } = {}) => {
    const [loadingUser, serLoadingUser] = useState(false)
    const router = useRouter()

    const { data: user, error, revalidate } = useSWR('auth/profile', () =>
        axios
            .get('auth/profile')
            .then(res => {
                serLoadingUser(true)
                return res.data.data.user
            })
            .catch(error => {
                serLoadingUser(true)
                if (error.response.status !== 409) throw error
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
        if (loadingUser) {
            // for login/signup page
            if (middleware === 'guest') {
                if (user) {
                    router.push('/admin/dashboard')
                }
            }

            // for all other page
            else if (middleware === 'auth') {
                if (!user) {
                    router.push('/admin/signin')
                }
                if (error) logout()
            }

            // for index page
            else if (!middleware) {
                if (user) {
                    router.push('/admin/dashboard')
                } else {
                    router.push('/admin/signin')
                }
            }
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
