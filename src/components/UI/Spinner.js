import React from 'react'

const Spinner = ({ loading, children }) => {
    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center w-full min-h-screen">
                    <div
                        className="inline-block w-8 h-8 bg-current rounded-full opacity-0 spinner-grow text-base-green"
                        role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    )
}

export default Spinner
