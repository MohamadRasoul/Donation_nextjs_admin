import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
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
import SupportProgramFilter from '@/components/Filters/SupportProgramFilter'

const SupportPrograms = () => {
    //#region State   ####################################
    const [supportPrograms, setSupportPrograms] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    const [supportProgramTypeFilter, setSupportProgramTypeFilter] = useState('')
    const [branchFilter, setBranchFilter] = useState('')
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId, charitableFoundationName } = router.query

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: supportProgramsData, supportProgramsError } = useSWR(
        `admin/supportProgram/charitablefoundation/${charitableFoundationId}/index?filter[support_program_type_id]=${supportProgramTypeFilter}&filter[branch_id]=${branchFilter}`,
    )

    useEffect(() => {
        setLoading(true)

        if (supportProgramsData) {
            setSupportPrograms(supportProgramsData.data.supportPrograms)
            setLoading(false)
        }
    }, [supportProgramsData, supportProgramTypeFilter, branchFilter])

    //#endregion

    //#region Function   ####################################

    const handelDelete = async supportProgramId => {
        await axios
            .delete(`/admin/supportProgram/${supportProgramId}/destroy`)
            .then(res => {
                console.log('supportProgram deleted successfully')

                setSupportPrograms(prevState =>
                    prevState.filter(
                        supportProgram => supportProgram.id != supportProgramId,
                    ),
                )
            })
            .catch(err => console.log(err))
    }

    const toggleModel = e => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
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
                setModalIsOpen(false)

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
                    modalIsOpen={modalIsOpen}
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

                <div className="w-full p-12 bg-white rounded-xl">
                    {/* Filter Part */}
                    <SupportProgramFilter
                        setSupportProgramTypeFilter={
                            setSupportProgramTypeFilter
                        }
                        setBranchFilter={setBranchFilter}
                    />

                    <Spinner loading={loading} isEmpty={!supportPrograms.length}>
                        {/* Cards */}
                        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
