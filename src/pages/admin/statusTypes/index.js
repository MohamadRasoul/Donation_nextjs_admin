import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import TableDropdown from '@/components/Dropdowns/TableDropdown'
import Spinner from '@/components/UI/Spinner'
import axios from '@/lib/axios'
import StatusTypeModal from '@/components/Modals/StatusTypeModal'

const StatusTypes = () => {
    //#region State   ####################################
    const [statusTypes, setStatusTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth'
    })

    const { data: statusTypesData, statusTypesError } = useSWR(
        `admin/statusType/index`,
    )

    useEffect(() => {
        if (statusTypesData) {
            setStatusTypes(statusTypesData.data.statusTypes)

            setLoading(false)
        }
    }, [statusTypesData])

    //#endregion

    //#region Function   ####################################

    const handelDelete = async statusTypeId => {
        await axios
            .delete(`/admin/statusType/${statusTypeId}/destroy`)
            .then(res => {
                console.log('statusType deleted successfully')

                setStatusTypes(prevState =>
                    prevState.filter(
                        statusType => statusType.id != statusTypeId,
                    ),
                )
            })
            .catch(err => console.log(err))
    }

    const toggleModel = e => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
    }

    const handelSubmitModel = async values => {
        await axios
            .post('/admin/statusType/store', values)
            .then(res => {
                console.log(res.data.data.statusType)
                setModalIsOpen(false)

                setStatusTypes(prevState => [
                    res.data.data.statusType,
                    ...prevState,
                ])
            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <StatusTypeModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Status Types
                                </h3>
                            </div>
                            <div className="">
                                <button
                                    onClick={e => toggleModel(e)}
                                    className="gap-2 btn btn-active btn-primary rounded-xl">
                                    <i className="text-lg fa-solid fa-plus"></i>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full sm:overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!statusTypes.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Description
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {statusTypes.map(statusType => (
                                        <tr className="">
                                            <Link
                                                href={`/admin/statusType/${statusType.id}`}>
                                                <a>
                                                    <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                        {statusType.title}
                                                    </th>
                                                </a>
                                            </Link>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <div className="truncate sm:w-56 lg:w-96">
                                                    {statusType.description}
                                                </div>
                                            </td>
                                            <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <TableDropdown
                                                    model={statusType}
                                                    handelDelete={handelDelete}
                                                />
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

export default StatusTypes

StatusTypes.layout = Admin
