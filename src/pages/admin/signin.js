import Link from 'next/link'
import useAuth from '@/hooks/auth'
import { useState } from 'react'

// Components for page
import ApplicationLogo from '@/components/ApplicationLogo'
import SigninCard from '@/components/Cards/SigninCard'

const Signin = () => {
    //#region State   ####################################
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    //#endregion

    //#region Hook   ####################################
    const { login } = useAuth({
        middleware: 'guest',
    })
    //#endregion

    //#region Function   ####################################
    const handelSubmit = values => {

        const email = values.email
        const password = values.password

        login({ email, password, setErrors, setStatus })
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <section className="relative w-full h-full min-h-screen py-20">
                <div
                    className="absolute top-0 w-full h-full bg-no-repeat bg-base-green opacity-80 bg-full"
                ></div>

                <div className="container h-full px-4 mx-auto">
                    <div className="flex items-center content-center justify-center h-full">
                        <div className="w-full px-4 lg:w-4/12">
                            <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 ">
                                <Link href="/">
                                    <div className="bg-gray-50 z-20  p-4 rounded-2xl ">
                                        <ApplicationLogo className={'w-24'} />
                                    </div>
                                </Link>

                                <SigninCard handelSubmit={handelSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    //#endregion
}

export default Signin
