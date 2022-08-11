import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'
import Link from 'next/link'
import axios from '@/lib/axios'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import DonationCampaignsShowModal from '@/components/Modals/DonationCampaignsShowModal'

const DonationCampaigns = () => {
    //#region State   ####################################
    const [campaigns, setCampaigns] = useState([])
    const [loading, setLoading] = useState(true)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [campaignToShow, setCampaignToShow] = useState()
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth'
    })

    const { data: campaignsData, error: campaignsError } = useSWR(
        `admin/donationPost/campaign/index`,
    )

    useEffect(() => {
        if (campaignsData) {
            setCampaigns(campaignsData.data.donationPosts)

            setLoading(false)
        }
    }, [campaignsData])

    //#endregion

    //#region Function   ####################################

    const toggleModel = (e, campaign) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setCampaignToShow(campaign)
        console.log(campaign)
    }

    const handelSubmitModel = async values => {
        console.log(values)
        await axios
            .post(`/admin/campaign/${campaignToShow.id}/updateAmount`, values)
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
            <div className="relative">
                <DonationCampaignsShowModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    campaign={campaignToShow}
                    handelSubmitModel={handelSubmitModel}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Donation Campaign
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!campaigns.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Charitable Foundation
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            City
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Is Active
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Donated
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Amount Required
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>{' '}
                                    </tr>
                                </thead>
                                <tbody>
                                    {campaigns.map(campaign => (
                                        <tr className="">
                                            <td className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                <div className="flex items-center flex-1 cursor-pointer select-none">
                                                    <div className="flex-1 pl-1 mr-16">
                                                        <div className="font-medium dark:text-white">
                                                            {
                                                                campaign.title
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {campaign.charitableFoundation}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {campaign.city}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {campaign.is_activate
                                                    ? <div className="px-1 text-center bg-green-200 rounded-lg text-gray-50"> active</div>
                                                    : <div className="px-1 text-center bg-red-200 rounded-lg text-gray-50"> not active</div>
                                                }
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${campaign.amount_donated}
                                            </td>
                                            <td className="p-4 px-6 text-sm align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                ${campaign.amount_required}
                                            </td>
                                            <td className="p-4 px-6 text-sm text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <i
                                                    onClick={e =>
                                                        toggleModel(e, campaign)
                                                    }
                                                    className="text-lg font-semibold text-gray-400 fa-regular fa-eye hover:text-base-green "></i>
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

export default DonationCampaigns

DonationCampaigns.layout = Admin
