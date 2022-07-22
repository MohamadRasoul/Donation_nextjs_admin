import Portal from '../Util/Portal'
import { Formik, Field, Form } from 'formik'

const CityModal = ({
    modalIsOpen,
    toggleModel,
    handelSubmitModel,
    modalIsAdd,
    city,
}) => {




    
    return (
        <Portal>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                {modalIsAdd ? 'Add new City' : 'Edit City'}
                            </h3>
                            <button
                                onClick={e => toggleModel(e)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <Formik
                            initialValues={
                                modalIsAdd
                                    ? {
                                          name: '',
                                          latitude: '',
                                          longitude: '',
                                      }
                                    : {
                                          name: city.name,
                                          latitude: city.latitude,
                                          longitude: city.longitude,
                                      }
                            }
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {({ setFieldValue }) => (
                                <Form>
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Name Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                Name
                                            </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                as="textarea"
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="city name..."
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

                                        {/* Image Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                for="image">
                                                Upload Image
                                            </label>
                                            <input
                                                id="image"
                                                name="image"
                                                type="file"
                                                onChange={event => {
                                                    setFieldValue(
                                                        'image',
                                                        event.currentTarget
                                                            .files[0],
                                                    )
                                                }}
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            />
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
                                            {modalIsAdd
                                                ? 'Add'
                                                : 'Edit'}
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

export default CityModal
