
import { Formik, Field, Form } from 'formik'
import moment from 'moment'

const DonationCampaignsShowModal = ({ modalIsOpen, toggleModel, campaign }) => {
    console.log(campaign)
    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center mb-10">
                                <h3 className="text-lg font-bold text-center">
                                    {`Campaign - ${campaign.title}`}
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
                                    Title :
                                </span>
                                {campaign.title}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    City :
                                </span>
                                {campaign.city}
                            </div>

                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    start date :
                                </span>
                                {moment(
                                    campaign.start_date,
                                ).format(
                                    'MMMM Do YYYY',
                                )}
                            </div>

                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    end date :
                                </span>
                                {moment(
                                    campaign.end_date,
                                ).format(
                                    'MMMM Do YYYY',
                                )}
                            </div>

                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Amount Required :
                                </span>
                                ${campaign.amount_required}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    Amount Donated :
                                </span>
                                ${campaign.amount_donated}
                            </div>
                        </div>

                        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                                    Donate User
                                </h3>
                            </div>
                            <ul className="flex flex-col divide divide-y w-full">
                                {campaign.usersDonate.map(userDonate => (
                                    <li className="flex flex-row justify-between w-full p-4">
                                        <div className=" pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                {userDonate.name}
                                            </div>

                                        </div>
                                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                                            ${userDonate.donations.reduce((accumulator, current) => accumulator + current.amount, 0)}
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

export default DonationCampaignsShowModal
