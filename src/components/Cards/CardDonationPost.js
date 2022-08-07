import moment from 'moment'

const CardDonationPost = ({ donationPost, handelDelete, toggleModel }) => {
    return (
        <div key={donationPost.id} className="">
            <div className="container flex flex-col flex-wrap justify-between mx-auto mb-6 overflow-hidden text-gray-500 bg-white shadow-lg lg:flex-row rounded-xl">
                <img
                    className="object-cover bg-white bg-center aspect-5/3 lg:w-1/3 "
                    src={donationPost.image}
                    alt=""
                />
                <div className="relative flex flex-col p-6 lg:p-10 lg:w-2/3">
                    <div className="">
                        <div className="flex justify-start">
                            {donationPost.status_types.map(statusType => (
                                <span className="px-2 py-1 mb-2 mr-2 text-xs text-gray-100 rounded-full bg-base-green">
                                    {statusType.title}
                                </span>
                            ))}
                        </div>
                        <div className="absolute flex items-center justify-end top-6 right-6 ">
                            <button
                                onClick={() => handelDelete(donationPost.id)}
                                className="px-3 py-1 text-gray-600 rounded-md text-md hover:bg-gray-300 hover:text-red-500">
                                <i className="fa-solid fa-trash-can "></i>
                            </button>
                            <button
                                onClick={e => toggleModel(e, false, donationPost)}
                                className="px-3 py-1 ml-2 text-gray-600 rounded-md text-md hover:bg-gray-300 hover:text-blue-500">
                                <i className="fa-solid fa-pen-to-square "></i>
                            </button>
                        </div>
                    </div>
                    <h1 className="text-3xl font-semibold">
                        {donationPost.title}
                    </h1>
                    <p className="flex-1 pt-2 mb-5 overflow-hidden min-h-16 max-h-20">
                        {donationPost.description}
                    </p>

                    <div className="flex flex-col pt-2 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex flex-col justify-start mb-3">
                            <div className="flex items-center text-gray-400 dark:text-gray-200">
                                <i className="m-1 text-secondary-green fa-solid fa-location-dot"></i>
                                <h1 className="px-2 text-lg font-medium">
                                    {donationPost.city}
                                </h1>
                            </div>
                            <div className="flex items-center mt-2 text-gray-400 dark:text-gray-200">
                                <i className="m-1 text-secondary-green fa-solid fa-clock-rotate-left"></i>
                                <div className="flex flex-col lg:flex-row">
                                    <h1 className="px-2 text-lg font-medium">{`from : ${moment(
                                        donationPost.start_date,
                                    ).format('dddd, MMMM Do YYYY')}`}</h1>
                                    <p className="hidden px-2 font-medium text-secondary-green lg:block">
                                        |
                                    </p>
                                    <h1 className="px-2 text-lg font-medium">{`to : ${moment(
                                        donationPost.end_date,
                                    ).format('dddd, MMMM Do YYYY')} `}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between px-8 py-4 border cursor-pointer lg:w-1/3 border-base-green rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="px-2 text-xs bg-gray-100 rounded-full text-base-green dark:text-base-green sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        required
                                    </div>

                                    <h2 className="text-2xl font-semibold text-base-green dark:text-base-green sm:text-3xl">
                                        ${donationPost.amount_required}
                                    </h2>
                                </div>
                                <p className="mx-3 -mb-3 font-extrabold text-base_green">
                                    {' _ '}
                                </p>
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="px-2 text-xs bg-gray-100 rounded-full text-base-green dark:text-base-green sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        donated
                                    </div>

                                    <h2 className="text-2xl font-semibold text-base-green dark:text-base-green sm:text-3xl">
                                        ${donationPost.amount_donated}
                                    </h2>
                                </div>
                            </div>

                            <progress
                                className="w-full m-auto mt-3 progress progress-success"
                                value={donationPost.amount_donated}
                                max={donationPost.amount_required}></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDonationPost
