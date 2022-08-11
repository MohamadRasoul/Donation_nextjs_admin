import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import axios from '@/lib/axios'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import TableDropdownBranch from '@/components/Dropdowns/TableDropdownBranch'
import Spinner from '@/components/UI/Spinner'
import BranchModal from '@/components/Modals/BranchModal'
import DeliveryMonyModal from '@/components/Modals/DeliveryMonyModal'

const Branches = () => {
    //#region State   ####################################
    const [branches, setBranches] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalDeliveryMonyIsOpen, setModalDeliveryMonyIsOpen] = useState(false)
    const [modalIsAdd, setModalIsAdd] = useState()
    const [modelForUpdate, setModelForUpdate] = useState()
    const [modelForDeliveryMony, setModelForDeliveryMony] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId } = router.query

    useAuth({
        middleware: 'auth',
    })

    const { data: branchesData, branchesError } = useSWR(
        `admin/branch/charitablefoundation/${charitableFoundationId}/index`,
    )

    useEffect(() => {
        if (branchesData) {
            setBranches(branchesData.data.branchs)

            setLoading(false)
        }
    }, [branchesData])

    //#endregion

    //#region Function   ####################################

    const handelDelete = async branchId => {
        setLoading(true)
        await axios
            .delete(`/admin/branch/${branchId}/destroy`)
            .then(res => {

                setBranches(prevState =>
                    prevState.filter(branch => branch.id != branchId),
                )
            })
            .catch(err => console.log(err))
    }

    const toggleModel = (e, isAdd = true, model = {}) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setModalIsAdd(isAdd)
        setModelForUpdate(model)
    }

    const toggleDeliveryMonyModel = (e, model = {}) => {
        e.preventDefault()
        setModalDeliveryMonyIsOpen(prevState => !prevState)
        setModelForDeliveryMony(model)
    }

    const handelSubmitModel = async values => {
        console.log(values)
        let data = {
            ...values,
            charitablefoundation_id: charitableFoundationId,
        }

        await axios
            .post(modalIsAdd
                ? '/admin/branch/store'
                : `/admin/branch/${modelForUpdate.id}/update`,
                data)
            .then(res => {

                setModalIsOpen(false)

                modalIsAdd
                    ? setBranches(prevState => [res.data.data.branch, ...prevState])
                    : setLoading(true)
            })
            .catch(err => console.log(err))
    }

    const handelSubmitDeliveryMonyModel = async values => {

        await axios
            .post(`/admin/branch/${modelForDeliveryMony.id}/addAmountDelivery`,
                values)
            .then(res => {
                setModalDeliveryMonyIsOpen(false)

                setLoading(true)

            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <BranchModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    modalIsAdd={modalIsAdd}
                    branch={modelForUpdate}
                />

                <DeliveryMonyModal
                    modalIsOpen={modalDeliveryMonyIsOpen}
                    toggleModel={toggleDeliveryMonyModel}
                    handelSubmitModel={handelSubmitDeliveryMonyModel}
                    branch={modelForDeliveryMony}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
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
                    <div className="block w-full overflow-auto">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!branches.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            City
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Address
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            PhoneNmber
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Required
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Donated
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Delivery
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {branches.map(branch => (
                                        <tr >

                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.name}
                                            </td>

                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.city}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <div className="w-56 truncate">
                                                    {branch.address}
                                                </div>
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.phone_number}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {branch.email}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${branch.amount_required}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${branch.amount_donated}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${branch.amount_delivery}
                                            </td>
                                            <td className="p-4 px-6 text-sm text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <TableDropdownBranch
                                                    model={branch}
                                                    handelDelete={handelDelete}
                                                    toggleModel={toggleModel}
                                                    toggleDeliveryMonyModel={toggleDeliveryMonyModel}
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

export default Branches

Branches.layout = Admin
