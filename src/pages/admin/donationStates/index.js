import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'
import Link from 'next/link'
import axios from '@/lib/axios'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import DonationStateShowModal from '@/components/Modals/DonationStateShowModal'
import toast from 'react-hot-toast'

const DonationStates = () => {
    //#region State   ####################################
    const [states, setStates] = useState([])
    const [loading, setLoading] = useState(true)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [stateToShow, setStateToShow] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth'
    })

    const { data: statesData, statesError } = useSWR(
        `admin/state/indexDonationState`,
    )

    useEffect(() => {
        if (statesData) {
            setStates(statesData.data.states)

            setLoading(false)
        }
    }, [statesData])

    //#endregion

    //#region Function   ####################################

    const toggleModel = (e, state) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setStateToShow(state)
        console.log(state)
    }

    const handelSubmitModel = async values => {
        console.log(values)
        await axios
            .post(`/admin/state/${stateToShow.id}/updateAmount`, values)
            .then(res => {
                setModalIsOpen(false)
                setLoading(true)
                
                toast.success('Success Added')
            })
            .catch(err => {
                toast.error('Sorry... Error With Added')
                setLoading(false)
            })
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <DonationStateShowModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    state={stateToShow}
                    handelSubmitModel={handelSubmitModel}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Donation States
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!states.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Charitable Foundation
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
                                            Amount Donated
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Required
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>{' '}
                                    </tr>
                                </thead>
                                <tbody>
                                    {states.map(state => (
                                        <tr className="">

                                            <td className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                <div className="flex flex-row">
                                                    <div className="flex items-center flex-1 cursor-pointer select-none">
                                                        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                            <a

                                                                className="relative block">
                                                                <img
                                                                    alt="profil"
                                                                    src={
                                                                        state.image
                                                                    }
                                                                    className="object-cover w-10 h-10 mx-auto rounded-full "
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
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {state.charitablefoundation}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {state.id_number}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {state.phone_number}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {state.father_name}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {state.mother_name}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${state.amount_donated}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${state.amount_required}
                                            </td>
                                            <td className="p-4 px-6 text-sm text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <i
                                                    onClick={e =>
                                                        toggleModel(e, state)
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

export default DonationStates

DonationStates.layout = Admin
