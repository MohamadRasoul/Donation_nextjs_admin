import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import DonorShowModal from '@/components/Modals/DonorShowModal'

const Users = () => {
    //#region User   ####################################
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [userToShow, setUserToShow] = useState()
    //#endregion

    //#region Hook   ####################################
    useAuth({
        middleware: 'auth',
    })

    const { data: usersData, error: usersError } = useSWR(
        `admin/user/indexDonors`,
    )

    useEffect(() => {
        if (usersData) {
            setUsers(usersData.data.users)

            setLoading(false)
        }
    }, [usersData])

    //#endregion

    //#region Function   ####################################

    const toggleModel = (e, user) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setUserToShow(user)
        console.log(user)
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <DonorShowModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    user={userToShow}
                />
                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Donors Users
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!users.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            name
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            phone number
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            email
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            city
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            amount donated
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>{' '}
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr className="">
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {user.phone_number}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {user.email}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {user.city}
                                            </td>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${user.amount_donated}
                                            </td>

                                            <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <i
                                                    onClick={e =>
                                                        toggleModel(e, user)
                                                    }
                                                    className="text-lg font-semibold text-gray-400 fa-regular fa-eye hover:text-base-green "></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Spinner>
                    </div>
                </div>
            </div>
        </>
    )
    //#endregion
}

export default Users

Users.layout = Admin
