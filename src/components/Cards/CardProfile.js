import React from 'react'

// components

const CardProfile = ({ charitableFoundation }) => {
    return (
        <>
            <div className="relative flex flex-col w-full min-w-0 mt-16 break-words bg-white rounded-lg shadow-xl">
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
                    <a className="absolute top-3 right-3 btn btn-primary">
                        <i class="fa-solid fa-pen-to-square text-lg"></i>
                    </a>
                    <div className="mt-20 text-center ">
                        <h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
                            {charitableFoundation.name}
                        </h3>
                        <a href={charitableFoundation.website} target="_blank">
                            <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase cursor-pointer text-blueGray-400">
                                <i class="fa-solid fa-globe mr-2"></i> go to
                                webstie
                            </div>
                        </a>
                        <div className="mt-10 mb-2 text-blueGray-600">
                            <i class="fa-solid fa-square-phone  mr-2 text-lg text-blueGray-400"></i>
                            {charitableFoundation.phone_number}
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i class="fa-solid fa-envelope mr-2 text-lg text-blueGray-400"></i>
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
