import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbar from '@/components/Navbars/HeaderNavbar'
import ChartibaleFoundationModal from '@/components/Modals/ChartibaleFoundationModal'
import CardCharitableFoundation from '@/components/Cards/CardCharitableFoundation'
import toast from 'react-hot-toast'


const charitableFoundations = () => {
    //#region State   ####################################
    const [charitableFoundations, setCharitableFoundations] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    //#endregion

    //#region Hook   ####################################
    useAuth({
        middleware: 'auth'
    })

    const { data: charitableFoundationsData, error } = useSWR(
        `admin/charitablefoundation/index`,
    )

    useEffect(() => {
        if (charitableFoundationsData) {
            setCharitableFoundations(
                charitableFoundationsData.data.charitablefoundations,
                setLoading(false),
            )
        }
    }, [charitableFoundationsData])
    //#endregion

    //#region Function   ####################################
    const toggleModel = e => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
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
            .post('/admin/charitablefoundation/store', data)
            .then(res => {

                setModalIsOpen(false)

                setCharitableFoundations(prevState => [
                    res.data.data.charitablefoundation,
                    ...prevState,
                ])
                toast.success('Success Added')

            })
            .catch(err => {
                toast.error('Sorry... Error With Added')
                setLoading(false)
            })
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <ChartibaleFoundationModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                />

                <HeaderNavbar title={'charitable'} toggleModel={toggleModel} />

                <Spinner loading={loading} isEmpty={!charitableFoundations.length}>
                    <div className="grid w-full gap-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                        {charitableFoundations?.map(charitableFoundation => (
                            <CardCharitableFoundation
                                charitableFoundation={charitableFoundation}
                            />
                        ))}
                    </div>
                </Spinner>
            </div>
        </>
    )
    //#endregion
}

export default charitableFoundations

charitableFoundations.layout = Admin
