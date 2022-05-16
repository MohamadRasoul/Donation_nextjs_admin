import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import { Formik, Field, Form } from 'formik'

// layout for page
import Admin from 'layouts/Admin.js'
import Portal from '@/components/Util/Portal'

const Charities = () => {
    const [charitableFoundations, setCharitableFoundations] = useState()
    const [modelIsOpen, setModelIsOpen] = useState(false)

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const getCharities = async () => {
        await axios
            .get('admin/charitableFoundation')
            .then(res => {
                setCharitableFoundations(res.data.data.charitableFoundations)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getCharities()
    }, [])

    const toggleModel = e => {
        e.preventDefault()
        setModelIsOpen(prevState => !prevState)
    }

    return (
        <>
            <div className="relative">
                <div className="navbar bg-base-100 rounded-2xl mb-14">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle">
                                <i className="fa-solid fa-bars"></i>
                            </label>
                            <ul
                                tabIndex="0"
                                className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Homepage</a>
                                </li>
                                <li>
                                    <a>Portfolio</a>
                                </li>
                                <li>
                                    <a>About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="text-xl normal-case btn btn-ghost">
                            Charities
                        </a>
                    </div>
                    <div className="navbar-end">
                        <a href="#my-modal-2">
                            <button
                                onClick={e => toggleModel(e)}
                                className="gap-2 btn btn-active btn-primary rounded-xl">
                                <i className="text-lg fa-solid fa-plus"></i>
                                Add
                            </button>
                        </a>
                    </div>
                </div>
                <Portal>
                    {modelIsOpen && (
                        <div
                            className="visible opacity-100 pointer-events-auto modal"
                            id="my-modal-2">
                            <div className="modal-box w-96 scrollbar-hide">
                                <div className="flex justify-between">
                                    <h3 className="mb-10 text-lg font-bold text-center">
                                        Add new Charity
                                    </h3>
                                    <a href="#">
                                        <button
                                            onClick={e => toggleModel(e)}
                                            type="button"
                                            class="w-8 h-8 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </a>
                                </div>

                                <Formik
                                    initialValues={{
                                        name: '',
                                        description: '',
                                        email: '',
                                        website: '',
                                        phoneNumber: '',
                                    }}
                                    onSubmit={(values, e) => {
                                        console.log(values)
                                        toggleModel(e)
                                        // await new Promise(r =>
                                        //     setTimeout(r, 500),
                                        // )
                                        // alert(JSON.stringify(values, null, 2))
                                    }}>
                                    <Form>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="w-full mb-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Name
                                                </label>

                                                <Field
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="name"
                                                />
                                            </div>
                                            <div className="w-full mb-6">
                                                <label
                                                    htmlFor="description"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                    Description
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    id="description"
                                                    as="textarea"
                                                    rows="4"
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Your description..."
                                                />
                                            </div>
                                            <div className="w-full mb-6">
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Email
                                                </label>

                                                <Field
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="email"
                                                />
                                            </div>
                                            <div className="w-full mb-6">
                                                <label
                                                    htmlFor="website"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Website
                                                </label>

                                                <Field
                                                    type="text"
                                                    name="website"
                                                    id="website"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="website"
                                                />
                                            </div>
                                            <div className="w-full mb-6">
                                                <label
                                                    htmlFor="phoneNumber"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    PhoneNumber
                                                </label>

                                                <Field
                                                    type="text"
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="phoneNumber"
                                                />
                                            </div>
                                        </div>
                                        <div className="modal-action">
                                            <a href="#">
                                                <button
                                                    onClick={e =>
                                                        toggleModel(e)
                                                    }
                                                    className="btn btn-primary btn-outline rounded-xl">
                                                    Close
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button
                                                    type="submit"
                                                    className="btn btn-active btn-primary btn-outline rounded-xl">
                                                    Add
                                                </button>
                                            </a>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    )}
                </Portal>

                <div className="grid w-full gap-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                    {charitableFoundations?.map(charitableFoundation => (
                        <div
                            key={charitableFoundation.id}
                            className="shadow-xl card bg-base-100 image-full">
                            <figure>
                                <img
                                    src={charitableFoundation.cover}
                                    alt="Charities"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex">
                                    <div className="mr-5 avatar">
                                        <div className="w-16 h-16 rounded-full">
                                            <img
                                                src={charitableFoundation.image}
                                                alt="Charities"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="card-title">
                                        {charitableFoundation.name}
                                    </h2>
                                </div>
                                <p className="h-20 overflow-hidden leading-relaxed overflow-ellipsis">
                                    {charitableFoundation.description}
                                </p>
                                <div className="justify-end card-actions">
                                    <button className="btn btn-primary">
                                        Show More ...
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Charities

Charities.layout = Admin
