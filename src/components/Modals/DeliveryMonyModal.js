
import { Formik, Field, Form } from 'formik'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const DeliveryMonyModal = ({
    modalIsOpen,
    toggleModel,
    handelSubmitModel,
    branch
}) => {

    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                Add Delivery Mony For Branch
                            </h3>
                            <button
                                onClick={e => toggleModel(e)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="font-medium text-gray-500 mb-7">
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    charitable foundation name :
                                </span>
                                {branch.charitable_foundation}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Branch Name :
                                </span>
                                {branch.name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Amount Required :
                                </span>
                                {branch.amount_required}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Amount Donated :
                                </span>
                                {branch.amount_donated}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Amount Delivery Before :
                                </span>
                                {branch.amount_delivery}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Branch City :
                                </span>
                                {branch.city}
                            </div>
                        </div>

                        <Formik
                            initialValues={{
                                amount: '',
                            }}
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {({ setFieldValue }) => (
                                <Form>

                                    <div className="flex flex-col items-center justify-center">
                                        {/* Amount Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="amount"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Amount
                                            </label>

                                            <Field
                                                type="number"
                                                name="amount"
                                                id="amount"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="amount"
                                            />
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
                                                {'Done'}
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    )
}

export default DeliveryMonyModal
