import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'
import moment from 'moment'
import { useRouter } from 'next/router'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbarForPost from '@/components/Navbars/HeaderNavbarForPost'
import DonationPostModal from '@/components/Modals/DonationPostModal'
import CardDonationPost from '@/components/Cards/CardDonationPost'
import DonationPostFilter from '@/components/Filters/DonationPostFilter'

const SponsorShips = () => {
    //#region State   ####################################
    const [donationPosts, setDonationPosts] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [modalIsAdd, setModalIsAdd] = useState()
    const [modelForUpdate, setModelForUpdate] = useState()

    const [cityFilter, setCityFilter] = useState('')
    const [branchFilter, setBranchFilter] = useState('')
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId, charitableFoundationName } = router.query

    useAuth({
        middleware: 'auth'
    })

    const { data: donationPostsData, error } = useSWR(
        `admin/donationPost/charitablefoundation/${charitableFoundationId}/index?filter[post_type_id]=2filter[post_type_id]=1&filter[branch_id]=${branchFilter}&filter[city_id]=${cityFilter}`,
    )

    useEffect(() => {
        setLoading(true)
        if (donationPostsData) {
            setDonationPosts(donationPostsData.data.donationPosts)
            setLoading(false)
        }
    }, [donationPostsData, cityFilter, branchFilter])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async donationPostId => {
        setLoading(true)
        await axios
            .delete(`/admin/donationPost/${donationPostId}/destroy`)
            .then(res => {

                setBranches(prevState =>
                    prevState.filter(
                        donationPost => donationPost.id != donationPostId,
                    ),
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

    const handelSubmitModel = async values => {
        const data = new FormData()
        data.append('title', values.title)
        data.append('description', values.description)
        data.append(
            'start_date',
            moment(values.start_date).format('YYYY-MM-DD'),
        )
        data.append('end_date', moment(values.end_date).format('YYYY-MM-DD'))
        data.append('amount_required', values.amount_required)
        data.append('image', values.image)

        data.append('post_type_id', '2')
        data.append('status_type_id', JSON.stringify(values.status_type_id))
        data.append('branch_id', values.branch_id)
        data.append('city_id', values.city_id)

        await axios
            .post(modalIsAdd
                ? '/admin/donationPost/store' :
                `/admin/donationPost/${modelForUpdate.id}/update`
                , data)
            .then(res => {
                setModalIsOpen(false)

                modalIsAdd
                    ? setDonationPosts(prevState => [
                        res.data.data.donationPost,
                        ...prevState,
                    ]) :
                    setLoading(true)

            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <DonationPostModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    charitableFoundationId={charitableFoundationId}
                    modalIsAdd={modalIsAdd}
                    donationPost={modelForUpdate}
                />

                <HeaderNavbarForPost
                    title={`SponsorShips - ${charitableFoundationName}`}
                    toggleModel={toggleModel}
                    charitableFoundationId={charitableFoundationId}
                    charitableFoundationName={charitableFoundationName}
                />

                <div className="w-full p-12 bg-white rounded-xl">
                    {/* Filter Part */}
                    <DonationPostFilter
                        setCityFilter={setCityFilter}
                        setBranchFilter={setBranchFilter}
                    />

                    <Spinner loading={loading} isEmpty={!donationPosts.length}>
                        {/* Cards */}
                        <div className="">
                            {donationPosts?.map(donationPost => (
                                <CardDonationPost
                                    handelDelete={handelDelete}
                                    toggleModel={toggleModel}
                                    donationPost={donationPost}
                                />
                            ))}
                        </div>
                    </Spinner>
                </div>
            </div>
        </>
    )
    //#endregion
}

export default SponsorShips

SponsorShips.layout = Admin
