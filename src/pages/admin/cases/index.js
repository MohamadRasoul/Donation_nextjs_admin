import Admin from 'layouts/Admin.js'
import { useEffect, useState } from 'react'

import { useAuth } from '@/hooks/auth'
import CardDonationPost from '@/components/Cards/CardDonationPost'
import useSWR from 'swr'
import HeaderNavbar from '@/components/Navbars/HeaderNavbar'
import ChartibaleFoundationModal from '@/components/Modals/ChartibaleFoundationModal'
import Spinner from '@/components/UI/Spinner'

const Cases = () => {
    // const router = useRouter()

    const [cases, setCases] = useState([])
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })
    const { data: CasesData, error } = useSWR(
        `admin/donationPost?filter[post_type_id]=4`,
    )

    const toggleModel = e => {
        e.preventDefault()
        setModelIsOpen(prevState => !prevState)
    }

    useEffect(() => {
        console.log(CasesData)
        if (CasesData) {
            setCases(CasesData.data.donationPosts)
            setLoading(false)
        }
    }, [CasesData])

    return (
        <>
            <div className="relative">
                <HeaderNavbar title={'Cases'} toggleModel={toggleModel} />

                {/* <ChartibaleFoundationModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                /> */}

                <Spinner loading={loading}>
                    <div className="grid w-full gap-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                        {cases?.map(thisCase => (
                            <CardDonationPost thisCase={thisCase} />
                        ))}
                    </div>
                </Spinner>
            </div>
        </>
    )
}

export default Cases

Cases.layout = Admin
