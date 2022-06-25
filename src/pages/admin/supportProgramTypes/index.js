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
import axios from '@/lib/axios'
import SupportProgramTypeModal from '@/components/Modals/SupportProgramTypeModal'

const SupportProgramTypes = () => {
    //#region State   ####################################
    const [supportProgramTypes, setSupportProgramTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [modelIsOpen, setModelIsOpen] = useState(false)
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: supportProgramTypesData, supportProgramTypesError } = useSWR(
        `admin/supportProgramType/index`,
    )

    useEffect(() => {
        if (supportProgramTypesData) {
            setSupportProgramTypes(
                supportProgramTypesData.data.supportProgramTypes,
            )

            setLoading(false)
        }
    }, [supportProgramTypesData])

    //#endregion

    //#region Function   ####################################

    const handelDelete = async supportProgramTypeId => {
        await axios
            .delete(`/admin/supportProgramType/${supportProgramTypeId}/destroy`)
            .then(res => {
                console.log('supportProgramType deleted successfully')

                setSupportProgramTypes(prevState =>
                    prevState.filter(
                        supportProgramType =>
                            supportProgramType.id != supportProgramTypeId,
                    ),
                )
            })
            .catch(err => console.log(err))
    }

    const toggleModel = e => {
        e.preventDefault()
        setModelIsOpen(prevState => !prevState)
    }

    const handelSubmitModel = async values => {

        await axios
            .post('/admin/supportProgramType/store', values)
            .then(res => {
                console.log(res.data.data.supportProgramType)
                setModelIsOpen(false)

                setSupportProgramTypes(prevState => [
                    res.data.data.supportProgramType,
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
                <SupportProgramTypeModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                />

                <div className="overflow-visible flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    SupportProgramTypes
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
                        <Spinner loading={loading}>
                            {supportProgramTypes.length ? (
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
                                        {supportProgramTypes.map(
                                            supportProgramType => (
                                                <tr className="">
                                                    <Link
                                                        href={`/admin/supportProgramType/${supportProgramType.id}`}>
                                                        <a>
                                                            <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                                {
                                                                    supportProgramType.title
                                                                }
                                                            </th>
                                                        </a>
                                                    </Link>
                                                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                        <div className="sm:w-56 lg:w-96 truncate">
                                                            {
                                                                supportProgramType.description
                                                            }
                                                        </div>
                                                    </td>
                                                    <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                        <TableDropdown
                                                            modelId={
                                                                supportProgramType.id
                                                            }
                                                            handelDelete={
                                                                handelDelete
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full py-20">
                                    <i class="fa-solid fa-circle-exclamation text-7xl text-gray-100"></i>
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

export default SupportProgramTypes

SupportProgramTypes.layout = Admin
