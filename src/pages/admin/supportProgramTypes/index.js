import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'
import Link from 'next/link'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import TableDropdown from '@/components/Dropdowns/TableDropdown'
import Spinner from '@/components/UI/Spinner'
import axios from '@/lib/axios'
import SupportProgramTypeModal from '@/components/Modals/SupportProgramTypeModal'
import toast from 'react-hot-toast'

const SupportProgramTypes = () => {
    //#region State   ####################################
    const [supportProgramTypes, setSupportProgramTypes] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIsAdd, setModalIsAdd] = useState()
    const [modelForUpdate, setModelForUpdate] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth'
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
        setLoading(true)
        await axios
            .delete(`/admin/supportProgramType/${supportProgramTypeId}/destroy`)
            .then(res => {

                setSupportProgramTypes(prevState =>
                    prevState.filter(
                        supportProgramType =>
                            supportProgramType.id != supportProgramTypeId,
                    ),
                )

                toast.success('Success Deleted')

            })
            .catch(err => {
                toast.error('Sorry... Error With Deleted')
                setLoading(false)
            })
    }

    const toggleModel = (e, isAdd = true, model = {}) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setModalIsAdd(isAdd)
        setModelForUpdate(model)
    }


    const handelSubmitModel = async values => {

        await axios
            .post(modalIsAdd
                ? '/admin/supportProgramType/store'
                : `/admin/supportProgramType/${modelForUpdate.id}/update`
                , values)
            .then(res => {
                setModalIsOpen(false)
                modalIsAdd
                    ? setSupportProgramTypes(prevState => [
                        res.data.data.supportProgramType,
                        ...prevState,
                    ])
                    : setLoading(true)
                toast.success(`Success ${modalIsAdd ? 'Added' : 'Updated'}`)
            })
            .catch(err => {
                toast.error(`Sorry... Error With ${modalIsAdd ? 'Added' : 'Updated'}`)
                setLoading(false)
            })
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <SupportProgramTypeModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    modalIsAdd={modalIsAdd}
                    supportProgramType={modelForUpdate}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Support Program Types
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
                        <Spinner loading={loading} isEmpty={!supportProgramTypes.length}>
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
                                                <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    <div className="truncate sm:w-56 lg:w-96">
                                                        {
                                                            supportProgramType.description
                                                        }
                                                    </div>
                                                </td>
                                                <td className="p-4 px-6 text-sm text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    <TableDropdown
                                                        model={
                                                            supportProgramType
                                                        }
                                                        handelDelete={
                                                            handelDelete
                                                        }
                                                        toggleModel={toggleModel}
                                                    />
                                                </td>
                                            </tr>
                                        ),
                                    )}
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

export default SupportProgramTypes

SupportProgramTypes.layout = Admin
