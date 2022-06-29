import React from 'react'
import Link from 'next/link'

// components

const HeaderCharitableFoundation = ({charitableFoundation}) => {
    return (
        <>
            {/* Header */}
            <div className="flex flex-wrap w-full mx-auto mb-12">
                {/* Support Program */}
                <div className="px-4 xl:w-1/5 sm:w-full lg:w-2/5 mb-4 cursor-pointer">
                    <Link
                        href={{
                            pathname: '/admin/donationPosts/supportPrograms',
                            query: {
                                charitableFoundationName: charitableFoundation.name,
                                charitableFoundationId: charitableFoundation.id,
                            },
                        }}>
                        <a>
                            <div className="flex flex-col justify-center p-4 shadow-lg rounded-xl sm:w-full bg-white text-gray-900">
                                <img
                                    src="https://source.unsplash.com/150x150/?person?3"
                                    alt=""
                                    className="w-28 h-28 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">
                                            Support Program
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                {/* News */}
                <div className="px-4 xl:w-1/5 sm:w-full lg:w-2/5 mb-4 cursor-pointer">
                    <Link
                        href={{
                            pathname: '/admin/donationPosts/news',
                            query: {
                                charitableFoundationName: charitableFoundation.name,
                                charitableFoundationId: charitableFoundation.id,
                            },
                        }}>
                        <a>
                            <div className="flex flex-col justify-center p-4 shadow-lg rounded-xl sm:w-full bg-white text-gray-900">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait"
                                    alt=""
                                    className="w-28 h-28 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">
                                            News
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                {/* Cases */}
                <div className="px-4 xl:w-1/5 sm:w-full lg:w-2/5 mb-4 cursor-pointer">
                    <Link
                        href={{
                            pathname: '/admin/donationPosts/cases',
                            query: {
                                charitableFoundationName: charitableFoundation.name,
                                charitableFoundationId: charitableFoundation.id,
                            },
                        }}>
                        <a>
                            <div className="flex flex-col justify-center p-4 shadow-lg rounded-xl sm:w-full bg-white text-gray-900">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait?3"
                                    alt=""
                                    className="w-28 h-28 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">
                                            Cases
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="px-4 xl:w-1/5 sm:w-full lg:w-2/5 mb-4 cursor-pointer">
                    <Link
                        href={{
                            pathname: '/admin/donationPosts/sponsorShips',
                            query: {
                                charitableFoundationName: charitableFoundation.name,
                                charitableFoundationId: charitableFoundation.id,
                            },
                        }}>
                        <a>
                            <div className="flex flex-col justify-center p-4 shadow-lg rounded-xl sm:w-full bg-white text-gray-900">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait?3"
                                    alt=""
                                    className="w-28 h-28 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">
                                            Sponsor Ships
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>

                {/* Campaigns */}
                <div className="px-4 xl:w-1/5 sm:w-full lg:w-2/5 mb-4 cursor-pointer">
                    <Link
                        href={{
                            pathname: '/admin/donationPosts/campaigns',
                            query: {
                                charitableFoundationName: charitableFoundation.name,
                                charitableFoundationId: charitableFoundation.id,
                            },
                        }}>
                        <a>
                            <div className="flex flex-col justify-center p-4 shadow-lg rounded-xl sm:w-full bg-white text-gray-900">
                                <img
                                    src="https://source.unsplash.com/150x150/?portrait?3"
                                    alt=""
                                    className="w-28 h-28 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        <h2 className="text-xl font-semibold sm:text-2xl">
                                            Campaigns
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HeaderCharitableFoundation
