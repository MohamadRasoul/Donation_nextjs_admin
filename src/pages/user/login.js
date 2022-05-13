import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'

import Auth from 'layouts/Auth.js'


const Login = () => {
    const router = useRouter()
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAdminAuthenticated: '/dashboard',
        redirectIfUserAuthenticated: '/dashboard',
    })

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)

        login({ email, password, setErrors, setStatus })
    }

    return (
        <>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                        <h6 className="text-blueGray-500 text-sm font-bold">
                            Sign in
                        </h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Email
                            </label>
                            <input
                                id="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="email"
                                ref={emailRef}
                                required
                                autoFocus
                                placeholder="Email"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                ref={passwordRef}
                                required
                                autoComplete="current-password"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Password"
                            />
                        </div>

                        {/* Remember Me */}
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    name="remember"
                                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                />
                                <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="text-center mt-6">
                            <button
                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </AuthCard>
            <div className="flex flex-wrap mt-6 relative justify-center">
                <Link href="/register">
                    <a className="text-blueGray-200">
                        <small>Create new account</small>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Login

Login.layout = Auth
