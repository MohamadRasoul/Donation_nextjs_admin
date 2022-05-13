import Head from 'next/head'
import Link from 'next/link'

import { useAuth } from '@/hooks/auth'
export default function NotAuthorized() {
    const { user, logout } = useAuth({
        middleware: 'guest',
    })

    const logoutHandler = e => {
        e.preventDefault()
        console.log('logged out')
        logout()
    }

    return (
        <>
            <div className="relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 hidden px-6 py-4 sm:block">
                    {user ? (
                        <>
                            <Link href="/admin/dashboard">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Dashboard
                                </a>
                            </Link>
                            <a
                                className="ml-4 text-sm text-gray-700 underline cursor-pointer"
                                onClick={e => logoutHandler(e)}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">
                                    Login
                                </a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1>Not Authorized</h1>
                </div>
            </div>
        </>
    )
}
