import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

// layout for page
import Admin from 'layouts/Admin.js'

// components for page
import Spinner from '@/components/UI/Spinner'
import SponsorShowModal from '@/components/Modals/SponsorShowModal'

const Users = () => {
    //#region User   ####################################
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [userToShow, setUserToShow] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: usersData, usersError } = useSWR(`admin/user/indexSponsors`)

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
                <SponsorShowModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    user={userToShow}
                />

                <div className="overflow-visible flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Sponsor Users
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading}>
                            {users.length ? (
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
                                                amount Sponsor
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
                                                    ${user.amount_sponsor}
                                                </td>
                                                <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    <i
                                                        onClick={e =>
                                                            toggleModel(e, user)
                                                        }
                                                        className="fa-regular fa-eye text-gray-400 font-semibold text-lg hover:text-base-green "></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full py-20">
                                    <i className="fa-solid fa-circle-exclamation text-7xl text-gray-100"></i>
                                    <p className="text-2xl text-gray-100">
                                        No Record
                                    </p>
                                </div>
                            )}
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
