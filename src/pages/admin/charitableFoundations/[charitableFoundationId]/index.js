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
import HeaderStats from '@/components/Headers/HeaderStats'

// layout for page
import Admin from 'layouts/Admin.js'

const charitableFoundations = () => {
    //#region State   ####################################
    const [charitableFoundation, setCharitableFoundation] = useState({})
    const [branches, setBranches] = useState()
    const [loading, setLoading] = useState(true)
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
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <HeaderStats />

                <Spinner loading={loading}>
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                            <CardProfile
                                charitableFoundation={charitableFoundation}
                            />
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <CardBranches branches={branches} />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-9">
                        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                            <CardLineChart />
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <CardBarChart />
                        </div>
                    </div>
                    {/* <div className="grid h-auto grid-cols-2 gap-5 "></div> */}
                </Spinner>
            </div>
        </>
    )
    //#endregion
}

export default charitableFoundations

charitableFoundations.layout = Admin
