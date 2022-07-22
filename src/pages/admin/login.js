import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Link from 'next/link'
import useAuth from '@/hooks/auth'
import { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'


import Auth from 'layouts/Auth.js'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth({
        middleware: 'guest',
        role: 'Admin',
    })

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)


    const submitForm = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        login({ email, password, setErrors, setStatus })
    }

    return (
        <>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <div className="px-6 py-6 mb-0 rounded-t">
                    <div className="mb-3 text-center">
                        <h6 className="text-sm font-bold text-blueGray-500">
                            Sign in
                        </h6>
                    </div>
                </div>

                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <form onSubmit={submitForm}>
                        {/* Email Address */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                htmlFor="grid-password">
                                Email
                            </label>
                            <input
                                id="email"
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                htmlFor="grid-password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                ref={passwordRef}
                                required
                                autoComplete="current-password"
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </AuthCard>
            <div className="relative flex flex-wrap justify-center mt-6">
                <Link href="/admin/register">
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
