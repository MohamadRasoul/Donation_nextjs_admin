import React from 'react'

// components

const CardProfile = ({ charitableFoundation, handelDelete, toggleModel }) => {
    return (
        <>
            <div className="relative flex flex-col w-full min-w-0 mt-16 break-words bg-white rounded-lg shadow-lg">
                <div className="relative px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex justify-center w-full px-4">
                            <div className="relative avatar">
                                <div className="absolute w-24 -m-12 align-middle shadow-xl rounded-xl ">
                                    <img src={charitableFoundation.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-5 right-5 flex items-center justify-end">
                        <button
                            onClick={() => handelDelete(charitableFoundation.id)}
                            className="text-gray-600 text-md py-1 px-3 hover:bg-gray-300 rounded-md hover:text-red-500">
                            <i className="fa-solid fa-trash-can "></i>
                        </button>
                        <button
                            onClick={e => toggleModel(e, false, charitableFoundation)}
                            className="text-gray-600 text-md ml-2 py-1 px-3 hover:bg-gray-300 rounded-md hover:text-blue-500">
                            <i className="fa-solid fa-pen-to-square "></i>
                        </button>
                    </div>
                    <div className="mt-20 text-center ">
                        <h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
                            {charitableFoundation.name}
                        </h3>
                        <a href={charitableFoundation.website} target="_blank">
                            <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase cursor-pointer text-blueGray-400">
                                <i className="fa-solid fa-globe mr-2"></i> go to
                                webstie
                            </div>
                        </a>
                        <div className="mt-10 mb-2 text-blueGray-600">
                            <i className="fa-solid fa-square-phone  mr-2 text-lg text-blueGray-400"></i>
                            {charitableFoundation.phone_number}
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fa-solid fa-envelope mr-2 text-lg text-blueGray-400"></i>
                            {charitableFoundation.email}
                        </div>
                    </div>
                    <div className="py-10 mt-10 text-center border-t border-blueGray-200">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 lg:w-9/12">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    {charitableFoundation.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProfile
