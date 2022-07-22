import { Formik, Field, Form } from 'formik'
import Link from 'next/link'

const SigninCard = ({ handelSubmit }) => {
    return (
        <div className="z-10 w-full px-6 py-8 mt-6 overflow-hidden shadow-xl bg-gray-50 sm:max-w-md sm:rounded-lg">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold text-base-green">
                    Sign in
                </h1>
                <p className="text-sm text-gray-400">
                    Sign in to access your account
                </p>
            </div>
            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async values => handelSubmit(values)}>
                    {() => (
                        <Form>
                            <div className="flex flex-col items-center justify-center">
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

                                {/* Submit Card */}
                                <div className="w-full modal-action ">
                                    <button
                                        type="submit"
                                        className="w-full btn btn-primary rounded-xl">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="relative flex flex-wrap justify-center mt-6">
                <Link href="/admin/signup">
                    <p className="px-6 text-center text-gray-600">
                        Don't have an account yet?
                        <a className="ml-2 cursor-pointer text-base-green hover:underline">
                            <small>Sign up</small>
                        </a>
                        .
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default SigninCard
