import Portal from '../Util/Portal'
import { Formik, Field, Form } from 'formik'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const BranchModal = ({ modalIsOpen, toggleModel, handelSubmitModel }) => {
    const [cities, setCities] = useState([])

    const { data: citiesData, citiesError } = useSWR(`admin/city/index`)

    useEffect(() => {
        if (citiesData) {
            setCities(citiesData.data.cities)
        }
    }, [citiesData])

    return (
        <Portal>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                Add new Branch
                            </h3>
                            <button
                                onClick={e => toggleModel(e)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <Formik
                            initialValues={{
                                description: '',
                                email: '',
                                phone_number: '',
                                address: '',
                                latitude: '',
                                longitude: '',
                                city_id: '',
                            }}
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {({ setFieldValue }) => (
                                <Form>
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Description Filed */}
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

                                        {/* Email Filed */}
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

                                        {/* PhoneNumber Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="phone_number"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                PhoneNumber
                                            </label>
                                            <Field
                                                type="text"
                                                name="phone_number"
                                                id="phone_number"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="phone_number"
                                            />
                                        </div>

                                        {/* Address Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="address"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                Address
                                            </label>
                                            <Field
                                                type="text"
                                                name="address"
                                                id="address"
                                                as="textarea"
                                                rows="2"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="branch address..."
                                            />
                                        </div>

                                        {/* Latitude Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="latitude"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Latitude
                                            </label>

                                            <Field
                                                type="number"
                                                name="latitude"
                                                id="latitude"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="latitude"
                                            />
                                        </div>

                                        {/* Longitude Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="longitude"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Longitude
                                            </label>

                                            <Field
                                                type="number"
                                                name="longitude"
                                                id="longitude"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="longitude"
                                            />
                                        </div>

                                        {/* City Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="city"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                City
                                            </label>
                                            <Field
                                                as="select"
                                                name="city_id"
                                                id="city"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>
                                                    Choose a Branch City
                                                </option>
                                                {cities.map(city => {
                                                    return (
                                                        <option
                                                            key={city.id}
                                                            value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    )
                                                })}
                                            </Field>
                                        </div>
                                    </div>

                                    {/* Submit & Close Modal */}
                                    <div className="modal-action">
                                        <button
                                            onClick={e => toggleModel(e)}
                                            className="btn btn-primary btn-outline rounded-xl">
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded-xl">
                                            Add
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </Portal>
    )
}

export default BranchModal
