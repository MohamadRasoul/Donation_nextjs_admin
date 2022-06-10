import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

// layout for page
import Admin from 'layouts/Admin.js'

// components for page
import TableDropdown from '@/components/Dropdowns/TableDropdown'
import Spinner from '@/components/UI/Spinner'

const Branches = () => {
    //#region State   ####################################
    const [branches, setBranches] = useState([])
    const [loading, setLoading] = useState(true)
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId } = router.query

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: branchesData, branchesError } = useSWR(
        `admin/charitableFoundation/${charitableFoundationId}/branch`,
    )

    useEffect(() => {
        if (branchesData) {
            setBranches(branchesData.data.branches)

            setLoading(false)
        }
    }, [branchesData])

    //#endregion

    //#region Function   ####################################
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                <div className="px-4 py-3 mb-0 border-0 rounded-t">
                    <div className="flex flex-wrap items-center">
                        <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                            <h3 className="text-lg font-semibold text-blueGray-700">
                                Branches
                                {branches.length
                                    ? ` - ${branches[0].charitable_foundation}`
                                    : ''}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <Spinner loading={loading}>
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                        City
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                        Region
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                        PhoneNmber
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {branches.length ? (
                                    branches.map(branch => (
                                        <tr className="">
                                            <Link
                                                href={`/admin/branch/${branch.charitableFoundationId}`}>
                                                <a>
                                                    <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                        {branch.city}
                                                    </th>
                                                </a>
                                            </Link>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.region}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.phone_number}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.email}
                                            </td>
                                            <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <TableDropdown />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <h1>no record</h1>
                                )}
                            </tbody>
                        </table>
                    </Spinner>
                </div>
            </div>
        </>
    )
    //#endregion
}

export default Branches

Branches.layout = Admin
