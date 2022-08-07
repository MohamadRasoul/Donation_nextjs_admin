import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const DonationPostFilter = ({ setCityFilter, setBranchFilter }) => {
    const [cities, setCities] = useState([])
    const [branches, setBranches] = useState([])

    const router = useRouter()
    const { charitableFoundationId, charitableFoundationName } = router.query

    const { data: citiesData, citiesError } = useSWR(`admin/city/index`)

    const { data: branchesData, branchesError } = useSWR(
        `admin/branch/charitablefoundation/${charitableFoundationId}/index`,
    )

    useEffect(() => {
        if (citiesData) {
            setCities(citiesData.data.cities)
        }
        if (branchesData) {
            setBranches(branchesData.data.branchs)
        }
    }, [citiesData, branchesData])

    return (
        <>
            {/* Filter Part */}
            <div className="flex flex-col mb-6 sm:items-start sm:justify-start lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 text-xl font-semibold text-base-green">
                    Filter :
                </div>
                <div className="flex flex-col items-start sm:justify-start lg:flex-row lg:justify-end">
                    {/* Filter By City */}
                    <div className="flex items-center mb-3 mr-5 whitespace-nowrap">
                        <label
                            htmlFor="types"
                            className="block mr-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Select City :
                        </label>
                        <select
                            onChange={e => setCityFilter(e.target.value)}
                            id="types"
                            className="pr-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">
                                All City
                            </option>

                            {cities.map(city => (
                                <option value={city.id} key={city.id}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Filter By Branch*/}
                    <div className="flex items-center whitespace-nowrap">
                        <label
                            htmlFor="branches"
                            className="block mr-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Select Branch :
                        </label>
                        <select
                            onChange={e => setBranchFilter(e.target.value)}
                            id="branches"
                            className="pr-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="">
                                All Branch
                            </option>

                            {branches.map(branch => (
                                <option value={branch.id} key={branch.id}>
                                    {branch.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="divider"></div>
        </>
    )
}

export default DonationPostFilter
