const Spinner = ({ loading, isEmpty = false, children }) => {
    console.log(loading, isEmpty)
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
            <div className="flex flex-col items-center justify-center w-full text-gray-200 h-96 text-9xl">
                <i className="fa-solid fa-circle-exclamation text-9xl"></i>
                <p className="my-12 text-5xl">No Data!</p>
            </div>
        )
    }

    return <>{children}</>
}

export default Spinner
