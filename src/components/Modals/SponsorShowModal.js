import Portal from '../Util/Portal'
import { Formik, Field, Form } from 'formik'

const SponsorShowModal = ({ modelIsOpen, toggleModel, user }) => {
    console.log(user)
    return (
        <Portal>
            {modelIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                {`Sponsor - ${user.name}`}
                            </h3>
                            <button
                                onClick={e => toggleModel(e, null)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div>{user.name}</div>
                    </div>
                </div>
            )}
        </Portal>
    )
}

export default SponsorShowModal
