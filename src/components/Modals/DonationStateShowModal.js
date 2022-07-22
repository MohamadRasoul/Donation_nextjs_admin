
import { Formik, Field, Form } from 'formik'
import moment from 'moment'

const DonationStateShowModal = ({ modalIsOpen, toggleModel, state ,handelSubmitModel }) => {
    console.log(state)
    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center mb-10">
                                <img
                                    className="w-10 h-10 rounded mr-4"
                                    src={state.image}
                                    alt="user image"
                                />
                                <h3 className="text-lg font-bold text-center">
                                    {`Sponsor - ${state.name}`}
                                </h3>
                            </div>
                            <button
                                onClick={e => toggleModel(e, null)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="font-medium text-gray-500 mb-7">
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    name :
                                </span>
                                {state.name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    ID Number :
                                </span>
                                {state.id_number}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    phone number :
                                </span>
                                {state.phone_number}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    father name :
                                </span>
                                {state.father_name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    mother name :
                                </span>
                                {state.mother_name}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 my-5">
                            <img
                                className="h-40 w-full object-cover object-center"
                                src={state.idCard_front_image}
                                alt="user image"
                            />
                            <img
                                className="h-40 w-full object-cover object-center"
                                src={state.idCard_back_image}
                                alt="user image"
                            />
                        </div>

                        <Formik
                            initialValues={{
                                amount_delivery: '',
                            }}
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {() => (
                                <Form>
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Amount Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="amount"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Amount
                                            </label>

                                            <Field
                                                type="number"
                                                name="amount_delivery"
                                                id="amount"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="amount"
                                            />
                                        </div>

                                    </div>
                                    <div className="modal-action">
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
        </>
    )
}

export default DonationStateShowModal
