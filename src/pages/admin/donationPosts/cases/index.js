import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import useSWR from 'swr'
import moment from 'moment'
import { useRouter } from 'next/router'

// components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbarForPost from '@/components/Navbars/HeaderNavbarForPost'
import DonationPostModal from '@/components/Modals/DonationPostModal'
import CardDonationPost from '@/components/Cards/CardDonationPost'

// layout for page
import Admin from 'layouts/Admin.js'

const Cases = () => {
    //#region State   ####################################
    const [donationPosts, setDonationPosts] = useState([])
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId, charitableFoundationName } = router.query

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: donationPostsData, error } = useSWR(
        `admin/donationPost/charitablefoundation/${charitableFoundationId}/index?filter[post_type_id]=1`,
    )

    useEffect(() => {
        if (donationPostsData) {
            setDonationPosts(donationPostsData.data.donationPosts)
            setLoading(false)
        }
    }, [donationPostsData])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async donationPostId => {
        await axios
            .delete(`/admin/donationPost/${donationPostId}/destroy`)
            .then(res => {
                console.log('donationPost deleted successfully')

                setBranches(prevState =>
                    prevState.filter(
                        donationPost => donationPost.id != donationPostId,
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
        const data = new FormData()
        data.append('title', values.title)
        data.append('description', values.description)
        data.append('image', values.image)
        data.append('branch_id', values.branch_id)

        await axios
            .post('/admin/donationPost/store', data)
            .then(res => {
                console.log(res.data.data.donationPost)
                setModelIsOpen(false)

                setDonationPosts(prevState => [
                    res.data.data.donationPost,
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
                <DonationPostModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    charitableFoundationId={charitableFoundationId}
                />

                <HeaderNavbarForPost
                    title={`Cases - ${charitableFoundationName}`}
                    toggleModel={toggleModel}
                    charitableFoundationId={charitableFoundationId}
                    charitableFoundationName={charitableFoundationName}
                />

                <div className="w-full rounded-xl bg-white p-12">
                    {/* Filter Part */}
                    <div className="header flex items-center justify-end mb-12">
                        <div className="text-end">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        id='"form-subscribe-Search'
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Enter a title"
                                    />
                                </div>
                                <button
                                    className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                    type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <Spinner loading={loading}>
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

export default Cases

Cases.layout = Admin
