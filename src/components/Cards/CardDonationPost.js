const CardDonationPost = ({ thisCase }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="w-full bg-cover rounded-t-lg"
                    src="https://api.lorem.space/image?w=250&h=180"
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {thisCase.title}
                    </h5>
                </a>
                <p className="h-20 mb-3 overflow-hidden font-normal leading-relaxed text-gray-700 overflow-ellipsis">
                    {thisCase.description}
                </p>
                <a href="#" className="btn btn-primary">
                    Read more
                    <svg
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default CardDonationPost
