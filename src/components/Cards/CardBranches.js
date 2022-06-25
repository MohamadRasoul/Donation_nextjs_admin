import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

// components

const CardBranches = ({ branches }) => {
    const router = useRouter()

    const { charitableFoundationId } = router.query

    return (
        <>
            <div className="flex flex-col justify-center p-4 bg-white border rounded-lg shadow-md xl:mt-16 sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="pb-5 mb-5 text-base font-bold text-center text-gray-900 border-b border-blueGray-200 lg:text-2xl dark:text-white">
                    Charity Branches
                </h5>
                <ul className="my-4 space-y-3">
                    {branches.length ? (
                        branches.slice(0, 4).map(branch => (
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        {branch.city}
                                    </span>
                                    {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                            Popular
                                        </span> */}
                                </a>
                            </li>
                        ))
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <i class="fa-solid fa-circle-exclamation text-5xl text-gray-100"></i>
                        </div>
                    )}
                </ul>

                <div className="justify-center pt-5 mt-5 border-t border-blueGray-200 card-actions">
                    {
                        <Link
                            href={`/admin/charitableFoundations/${charitableFoundationId}/branches`}>
                            <a className="btn btn-primary">Show All Branches</a>
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}

export default CardBranches
