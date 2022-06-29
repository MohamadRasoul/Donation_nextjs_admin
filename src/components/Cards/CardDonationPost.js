const CardDonationPost = ({ donationPost, handelDelete, toggleModel }) => {
    return (
        <div key={donationPost.id} className="">
            <div className=" container flex overflow-hidden flex-wrap justify-between flex-col lg:flex-row mx-auto bg-white text-gray-500 shadow-lg mb-6 rounded-xl">
                <img
                    className="bg-white bg-center aspect-5/3  object-cover lg:w-1/3 "
                    src={donationPost.image}
                    alt=""
                />
                <div className="relative flex flex-col p-6 lg:p-10 lg:w-2/3">
                    <div className="">
                        <div className="flex justify-start">
                            {donationPost.status_types.map(statusType => (
                                <span className="px-2 py-1 mb-2 mr-2 text-xs rounded-full bg-base-green text-gray-100">
                                    {statusType.title}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-6 right-6 flex items-center justify-end ">
                            <button
                                onClick={() => handelDelete(donationPost.id)}
                                className="text-gray-600 text-md py-1 px-3 hover:bg-gray-300 rounded-md hover:text-red-500">
                                <i className="fa-solid fa-trash-can "></i>
                            </button>
                            <button
                                onClick={e => toggleModel(e)}
                                className="text-gray-600 text-md ml-2 py-1 px-3 hover:bg-gray-300 rounded-md hover:text-blue-500">
                                <i className="fa-solid fa-pen-to-square "></i>
                            </button>
                        </div>
                    </div>
                    <h1 className="text-3xl font-semibold">
                        {donationPost.title}
                    </h1>
                    <p className="flex-1 pt-2 min-h-16 max-h-20 overflow-hidden mb-5">
                        {donationPost.description}
                    </p>

                    <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-between pt-2">
                        <div className="flex flex-col justify-start mb-3">
                            <div className="flex items-center text-gray-400 dark:text-gray-200">
                                <i className="text-secondary-green fa-solid fa-location-dot m-1"></i>
                                <h1 className="px-2 text-lg font-medium">
                                    {donationPost.city}
                                </h1>
                            </div>
                            <div className="flex items-center mt-2 text-gray-400 dark:text-gray-200">
                                <i className="text-secondary-green fa-solid fa-clock-rotate-left m-1"></i>
                                <div className="flex flex-col lg:flex-row">
                                    <h1 className="px-2 text-lg font-medium">{`from : ${donationPost.start_date}`}</h1>
                                    <p className="px-2 font-medium text-secondary-green hidden lg:block">
                                        |
                                    </p>
                                    <h1 className="px-2 text-lg font-medium">{`to : ${donationPost.end_date} `}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between px-8 py-4 lg:w-1/3 border border-base-green cursor-pointer rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="px-2 text-xs text-base-green bg-gray-100 rounded-full dark:text-base-green sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        required
                                    </div>

                                    <h2 className="text-2xl font-semibold text-base-green dark:text-base-green sm:text-3xl">
                                        ${donationPost.amount_required}
                                    </h2>
                                </div>
                                <p className="text-base_green font-extrabold -mb-3 mx-3">
                                    {' _ '}
                                </p>
                                <div className="flex flex-col items-center space-y-1">
                                    <div className="px-2 text-xs text-base-green bg-gray-100 rounded-full dark:text-base-green sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                        donated
                                    </div>

                                    <h2 className="text-2xl font-semibold text-base-green dark:text-base-green sm:text-3xl">
                                        ${donationPost.amount_donated}
                                    </h2>
                                </div>
                            </div>

                            <progress
                                className="progress progress-success w-full m-auto mt-3"
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
