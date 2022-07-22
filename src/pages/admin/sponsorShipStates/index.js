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
import SponsorShipStateShowModal from '@/components/Modals/SponsorShipStateShowModal'

const States = () => {
    //#region State   ####################################
    const [states, setStates] = useState([])
    const [loading, setLoading] = useState(true)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [stateToShow, setStateToShow] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: statesData, statesError } = useSWR(
        `admin/state/indexSponsorShip`,
    )

    useEffect(() => {
        setLoading(true)

        if (statesData) {
            setStates(statesData.data.states)

            setLoading(false)
        }
    }, [statesData, modalIsOpen])

    //#endregion

    //#region Function   ####################################

    const toggleModel = (e, state) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setStateToShow(state)
        console.log(state)
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <SponsorShipStateShowModal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    toggleModel={toggleModel}
                    state={stateToShow}
                    setLoading={setLoading}
                />

                <div className="overflow-visible flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    SponsorShip States
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading}>
                            {states.length ? (
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Id Number
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Phone Number
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Father Name
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                Mather Name
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                amount delivery
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                                amount not delivery this month
                                            </th>
                                            <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>{' '}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {states.map(state => (
                                            <tr className="">
                                                <Link
                                                    href={`/admin/states/${state.id}`}>
                                                    <a>
                                                        <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                            <div className="flex flex-row">
                                                                <div className="select-none cursor-pointer flex flex-1 items-center">
                                                                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                                        <a
                                                                            href="#"
                                                                            className="block relative">
                                                                            <img
                                                                                alt="profil"
                                                                                src={
                                                                                    state.image
                                                                                }
                                                                                className="mx-auto object-cover rounded-full h-10 w-10 "
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="flex-1 pl-1 mr-16">
                                                                        <div className="font-medium dark:text-white">
                                                                            {
                                                                                state.name
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </a>
                                                </Link>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    {state.id_number}
                                                </td>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    {state.phone_number}
                                                </td>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    {state.father_name}
                                                </td>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    {state.mother_name}
                                                </td>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    $
                                                    {
                                                        state.sponsorShips_amount_delivery
                                                    }
                                                </td>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    $
                                                    {
                                                        state.sponsorShips_amount_not_delivery_this_month
                                                    }
                                                </td>

                                                <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    <i
                                                        onClick={e =>
                                                            toggleModel(
                                                                e,
                                                                state,
                                                            )
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

export default States

States.layout = Admin
