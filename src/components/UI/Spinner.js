const Spinner = ({ loading = false, isEmpty = false, children }) => {

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-96">
                <div
                    className="inline-block w-8 h-8 rounded-full opacity-0 bg-primary spinner-grow text-base-green"
                    role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (isEmpty) {
        return (
            <div className="flex flex-col items-center justify-center w-full text-gray-200 h-60 text-9xl">
                <i className="text-8xl fa-solid fa-circle-exclamation"></i>
                <p className="my-8 text-3xl">No Data!</p>
            </div>
        )
    }

    return <>{children}</>
}

export default Spinner
