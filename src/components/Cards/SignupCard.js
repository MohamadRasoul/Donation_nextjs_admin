import { Formik, Field, Form } from 'formik'
import Link from 'next/link'

const SignupCard = ({ handelSubmit }) => {
    return (
        <div className="z-10 w-full px-6 py-8 mt-6 overflow-hidden shadow-xl bg-gray-50 sm:max-w-md sm:rounded-lg">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-base-green">
                    Sign up
                </h1>
                <p className="text-sm text-gray-400">Create new account</p>
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                    }}
                    onSubmit={async values => handelSubmit(values)}>
                    {() => (
                        <Form>
                            <div className="flex flex-col items-center justify-center">
                                {/* Name Filed */}
                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full p-3 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name"
                                    />
                                </div>

                                {/* Email Filed */}
                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <Field
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="block w-full p-3 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="email"
                                    />
                                </div>

                                {/* Password Filed */}
                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="block w-full p-3 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                    />
                                </div>

                                {/* Password Confirmation Filed */}
                                <div className="w-full mb-6">
                                    <label
                                        htmlFor="password_confirmation"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                                        Password Confirmation
                                    </label>
                                    <Field
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        className="block w-full p-3 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password Confirmation"
                                    />
                                </div>

                                {/* Submit Card */}
                                <div className="w-full modal-action ">
                                    <button
                                        type="submit"
                                        className="w-full btn btn-primary rounded-xl">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="relative flex flex-wrap justify-center mt-6">
                <Link href="/admin/signin">
                    <p className="px-6 text-center text-gray-600">
                        have account before?
                        <a className="ml-2 cursor-pointer text-base-green hover:underline">
                            <small>Sign in</small>
                        </a>
                        .
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default SignupCard
