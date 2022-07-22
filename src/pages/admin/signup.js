import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import useAuth from '@/hooks/auth'
import { useState } from 'react'
import SignupCard from '@/components/Cards/SignupCard'

const Signup = () => {
    const { register } = useAuth({
        middleware: 'guest',
        role: 'Admin',
    })

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const handelSubmit = values => {
        const name = values.name
        const email = values.email
        const password = values.password
        const password_confirmation = values.password_confirmation

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <>
            <section className="relative w-full h-full min-h-screen py-20">
                <div
                    className="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
                    style={{
                        backgroundImage: "url('/img/register_bg_2.png')",
                    }}></div>

                <div className="container h-full px-4 mx-auto">
                    <div className="flex items-center content-center justify-center h-full">
                        <div className="w-full px-4 lg:w-4/12">
                            <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-blueGray-200">
                                <Link href="/" className="z-10">
                                    <a>
                                        <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                                    </a>
                                </Link>

                                <SignupCard handelSubmit={handelSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
