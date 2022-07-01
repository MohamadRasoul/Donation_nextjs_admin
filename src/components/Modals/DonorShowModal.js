import Portal from '../Util/Portal'
import moment from 'moment'

const DonorShowModal = ({ modalIsOpen, toggleModel, user }) => {
    console.log(user)
    return (
        <Portal>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                {`Donor - ${user.name}`}
                            </h3>
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
                                {user.name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    phone number :
                                </span>
                                {user.phone_number}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    email :
                                </span>
                                {user.email}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    city :
                                </span>
                                {user.city}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    region :
                                </span>
                                {user.region}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    amount donated :
                                </span>
                                ${user.amount_donated}
                            </div>
                        </div>

                        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Donation State
                                </h3>
                            </div>
                            <ul className="flex flex-col divide divide-y">
                                {user.donations.map(donation => (
                                    <li className="flex flex-row">
                                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                <a
                                                    href="#"
                                                    className="block relative">
                                                    <img
                                                        alt="profil"
                                                        src={
                                                            donation.state_image
                                                        }
                                                        className="mx-auto object-cover rounded-full h-10 w-10 "
                                                    />
                                                </a>
                                            </div>
                                            <div className="flex-1 pl-1 mr-16">
                                                <div className="font-medium dark:text-white">
                                                    {donation.state_name}
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                    {moment(
                                                        donation.date,
                                                    ).format(
                                                        'dddd, MMMM Do YYYY',
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                ${donation.amount}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Portal>
    )
}

export default DonorShowModal
