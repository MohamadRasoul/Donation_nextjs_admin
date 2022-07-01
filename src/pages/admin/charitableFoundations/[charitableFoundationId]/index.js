import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// components for page
import Spinner from '@/components/UI/Spinner'
import CardProfile from '@/components/Cards/CardProfile'
import CardLineChart from '@/components/Cards/CardLineChart'
import CardBarChart from '@/components/Cards/CardBarChart'
import CardBranches from '@/components/Cards/CardBranches'

// layout for page
import Admin from 'layouts/Admin.js'
import HeaderCharitableFoundation from '@/components/Headers/HeaderCharitableFoundation'
import axios from '@/lib/axios'

const charitableFoundations = () => {
    //#region State   ####################################
    const [charitableFoundation, setCharitableFoundation] = useState({})
    const [branches, setBranches] = useState()
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId } = router.query
    useAuth({
        middleware: 'auth',
        role: 'Admin',
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
        await axios
            .delete(`/admin/charitablefoundation/${charitableFoundationId}/destroy`)
            .then(res => {
                console.log('charitableFoundation deleted successfully')

                router.push('/admin/charitableFoundations')
            })
            .catch(err => console.log(err))
    }

    const toggleModel = e => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative -mt-46">
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
                    {/* <div className="flex flex-wrap mt-9">
                        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                            <CardLineChart />
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <CardBarChart />
                        </div>
                    </div> */}
                    {/* <div className="grid h-auto grid-cols-2 gap-5 "></div> */}
                </Spinner>
            </div>
        </>
    )
    //#endregion
}

export default charitableFoundations

charitableFoundations.layout = Admin
