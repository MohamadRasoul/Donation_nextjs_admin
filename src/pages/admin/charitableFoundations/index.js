import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import useSWR from 'swr'

// components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbar from '@/components/Navbars/HeaderNavbar'
import ChartibaleFoundationModal from '@/components/Modals/ChartibaleFoundationModal'
import CardCharitableFoundation from '@/components/Cards/CardCharitableFoundation'

// layout for page
import Admin from 'layouts/Admin.js'

const charitableFoundations = () => {
    //#region State   ####################################
    const [charitableFoundations, setCharitableFoundations] = useState()
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    //#endregion

    //#region Hook   ####################################
    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: charitableFoundationsData, error } = useSWR(
        `admin/charitablefoundation/index`,
    )

    useEffect(() => {
        if (charitableFoundationsData) {
            setCharitableFoundations(
                charitableFoundationsData.data.charitablefoundations,
            )
            setLoading(false)
        }
    }, [charitableFoundationsData])
    //#endregion

    //#region Function   ####################################
    const toggleModel = e => {
        e.preventDefault()
        setModelIsOpen(prevState => !prevState)
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
                console.log(res.data.data.charitablefoundation)
                setModelIsOpen(false)

                setCharitableFoundations(prevState => [
                    res.data.data.charitablefoundation,
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
                <ChartibaleFoundationModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                />
                
                <HeaderNavbar title={'charitable'} toggleModel={toggleModel} />

                <Spinner loading={loading}>
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
