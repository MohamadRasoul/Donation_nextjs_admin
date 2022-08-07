import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from '@/lib/axios'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import CardProfile from '@/components/Cards/CardProfile'
import CardBranches from '@/components/Cards/CardBranches'
import HeaderCharitableFoundation from '@/components/Headers/HeaderCharitableFoundation'
import ChartibaleFoundationModal from '@/components/Modals/ChartibaleFoundationModal'

const CharitableFoundation = () => {
    //#region State   ####################################
    const [charitableFoundation, setCharitableFoundation] = useState({})
    const [branches, setBranches] = useState()
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIsAdd, setModalIsAdd] = useState()
    const [modelForUpdate, setModelForUpdate] = useState()

    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId } = router.query

    useAuth({
        middleware: 'auth'
    })

    const {
        data: charitableFoundationData,
        charitableFoundationError,
    } = useSWR(`admin/charitablefoundation/${charitableFoundationId}/show`)

    const { data: branchesData, branchesError } = useSWR(
        `admin/branch/charitablefoundation/${charitableFoundationId}/index`,
    )

    useEffect(() => {
        if (charitableFoundationData && branchesData) {
            setCharitableFoundation(
                charitableFoundationData.data.charitablefoundation,
            )
            setBranches(branchesData.data.branchs)

            setLoading(false)
        }
    }, [charitableFoundationData, branchesData])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async charitableFoundationId => {
        setLoading(true)
        await axios
            .delete(`/admin/charitablefoundation/${charitableFoundationId}/destroy`)
            .then(res => {

                router.push('/admin/charitableFoundations')
            })
            .catch(err => console.log(err))
    }

    const toggleModel = (e, isAdd = true, model = {}) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setModalIsAdd(isAdd)
        setModelForUpdate(model)
    }

    const handelSubmitModel = async values => {
        const data = new FormData()
        data.append('name', values.name)
        data.append('description', values.description)
        data.append('email', values.email)
        data.append('website', values.website)
        data.append('phone_number', values.phone_number)
        data.append('image', values.image)
        data.append('cover', values.cover)

        await axios
            .post(`/admin/charitablefoundation/${modelForUpdate.id}/update`, data)
            .then(res => {
                setModalIsOpen(false)
                setLoading(true)
            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative -mt-46">
                <ChartibaleFoundationModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    modalIsAdd={modalIsAdd}
                    chartibaleFoundation={modelForUpdate}
                />


                <Spinner loading={loading}>
                    <div className="flex flex-wrap flex-grow">
                        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                            <CardProfile
                                charitableFoundation={charitableFoundation}
                                handelDelete={handelDelete}
                                toggleModel={toggleModel}
                            />
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <CardBranches branches={branches} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-9">
                        <HeaderCharitableFoundation
                            charitableFoundation={charitableFoundation}
                        />
                    </div>
                </Spinner>
            </div>
        </>
    )
    //#endregion
}

export default CharitableFoundation

CharitableFoundation.layout = Admin
