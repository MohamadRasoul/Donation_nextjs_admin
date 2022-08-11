
import moment from 'moment'

const DonorShowModal = ({ modalIsOpen, toggleModel, user }) => {
    console.log(user)
    return (
        <>
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
                                    amount donated :
                                </span>
                                ${user.amount_donated}
                            </div>
                        </div>

                        <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                            <div className="w-full px-4 py-5 border-b sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    Donation State
                                </h3>
                            </div>
                            <ul className="flex flex-col divide-y divide">
                                {user.donations.map(donation => (
                                    <li className="flex flex-row">
                                        <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                                            <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                <a
                                                    className="relative block">
                                                    <img
                                                        alt="profil"
                                                        src={
                                                            donation.state_image
                                                        }
                                                        className="object-cover w-10 h-10 mx-auto rounded-full "
                                                    />
                                                </a>
                                            </div>
                                            <div className="flex-1 pl-1 mr-16">
                                                <div className="font-medium dark:text-white">
                                                    {donation.state_name}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-200">
                                                    {moment(
                                                        donation.date,
                                                    ).format(
                                                        'MMMM Do YYYY',
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-200">
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
        </>
    )
}

export default DonorShowModal
