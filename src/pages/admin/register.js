import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Link from 'next/link'
import useAuth from '@/hooks/auth'
import { useState } from 'react'

import Auth from 'layouts/Auth.js'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        role: 'Admin',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
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
                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <div className="px-6 py-6 mb-0 rounded-t">
                    <div className="mb-3 text-center">
                        <h6 className="text-sm font-bold text-blueGray-500">
                            Sign up
                        </h6>
                    </div>
                </div>

                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                    <form onSubmit={submitForm}>
                        {/* Name */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                htmlFor="grid-password">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={event => setName(event.target.value)}
                                required
                                autoFocus
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                placeholder="Name"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                htmlFor="grid-password">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                required
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                                value={password}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                required
                                autoComplete="new-password"
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                placeholder="Password"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="relative w-full mb-3">
                            <label
                                className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                                htmlFor="grid-password">
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                value={password_confirmation}
                                onChange={event =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                required
                                className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                                type="submit">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </AuthCard>
            <div className="relative flex flex-wrap justify-center mt-6">
                <Link href="/admin/login">
                    <a className="text-blueGray-200">
                        <small>Already registered</small>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Register

Register.layout = Auth
