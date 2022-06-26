import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import useSWR from 'swr'
import moment from 'moment'

// components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbarForPost from '@/components/Navbars/HeaderNavbarForPost'
import SupportProgramModal from '@/components/Modals/SupportProgramModal'
import CardSupportProgram from '@/components/Cards/CardSupportProgram'

// layout for page
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'

const SupportPrograms = () => {
    //#region State   ####################################
    const [supportPrograms, setSupportPrograms] = useState([])
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

    const { data: supportProgramsData, error } = useSWR(
        `admin/supportProgram/charitablefoundation/${charitableFoundationId}/index`,
    )

    useEffect(() => {
        if (supportProgramsData) {
            setSupportPrograms(supportProgramsData.data.supportPrograms)
            setLoading(false)
        }
    }, [supportProgramsData])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async supportProgramId => {
        await axios
            .delete(`/admin/supportProgram/${supportProgramId}/destroy`)
            .then(res => {
                console.log('supportProgram deleted successfully')

                setBranches(prevState =>
                    prevState.filter(
                        supportProgram => supportProgram.id != supportProgramId,
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
        data.append(
            'begin_date',
            moment(values.begin_date).format('YYYY-MM-DD'),
        )
        data.append('url_to_contact', values.url_to_contact)
        data.append('image', values.image)
        data.append('instructor', values.instructor)
        data.append('image_instructor', values.image_instructor)
        data.append('support_program_type_id', values.support_program_type_id)
        data.append('branch_id', values.branch_id)

        await axios
            .post('/admin/supportProgram/store', data)
            .then(res => {
                console.log(res.data.data.supportProgram)
                setModelIsOpen(false)

                setSupportPrograms(prevState => [
                    res.data.data.supportProgram,
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
                <SupportProgramModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    charitableFoundationId={charitableFoundationId}
                />

                <HeaderNavbarForPost
                    title={`Support Program - ${charitableFoundationName}`}
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
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                            {supportPrograms?.map(supportProgram => (
                                <CardSupportProgram
                                    handelDelete={handelDelete}
                                    toggleModel={toggleModel}
                                    supportProgram={supportProgram}
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

export default SupportPrograms

SupportPrograms.layout = Admin
