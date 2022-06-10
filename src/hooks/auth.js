import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, role } = {}) => {
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
            .post(`auth/register/${role === 'User' ? 1 : 0}`, props)
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
            .post(`auth/login/${role === 'User' ? 1 : 0}`, props)
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

        if (middleware === 'guest') {
            if (user) {
                if (user.is_admin == true && role == 'Admin')
                    router.push('/admin/dashboard')
                if (user.is_admin == false && role == 'User')
                    router.push('/index')
            }
        }

        if (middleware === 'auth') {
            if (user) {
                if (user.is_admin === true && role != 'Admin')
                    router.push('/notAuthorized')

                if (user.is_admin === false && role != 'User')
                    router.push('/notAuthorized')
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
