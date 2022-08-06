import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import useSWR from 'swr'
import { useRouter } from 'next/router'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbarForPost from '@/components/Navbars/HeaderNavbarForPost'
import NewsModal from '@/components/Modals/NewsModal'
import CardNews from '@/components/Cards/CardNews'
import NewsFilter from '@/components/Filters/DonationPostFilter copy'

const News = () => {
    //#region State   ####################################
    const [news, setNews] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    const [branchFilter, setBranchFilter] = useState('')
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()
    const { charitableFoundationId, charitableFoundationName } = router.query

    useAuth({
        middleware: 'auth',
    })

    const { data: newsData, error } = useSWR(
        `admin/news/charitablefoundation/${charitableFoundationId}/index?filter[branch_id]=${branchFilter}`,
    )

    useEffect(() => {
        setLoading(true)
        if (newsData) {
            setNews(newsData.data.news)
            setLoading(false)
        }
    }, [newsData, branchFilter])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async newsId => {
        await axios
            .delete(`/admin/news/${newsId}/destroy`)
            .then(res => {
                console.log('news deleted successfully')

                setBranches(prevState =>
                    prevState.filter(news => news.id != newsId),
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
        data.append('image', values.image)
        data.append('branch_id', values.branch_id)

        await axios
            .post('/admin/news/store', data)
            .then(res => {
                console.log(res.data.data.news)
                setModalIsOpen(false)

                setNews(prevState => [res.data.data.news, ...prevState])
            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <NewsModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    charitableFoundationId={charitableFoundationId}
                />

                <HeaderNavbarForPost
                    title={`News - ${charitableFoundationName}`}
                    toggleModel={toggleModel}
                    charitableFoundationId={charitableFoundationId}
                    charitableFoundationName={charitableFoundationName}
                />

                <div className="w-full p-12 bg-white rounded-xl">
                    {/* Filter Part */}
                    <NewsFilter setBranchFilter={setBranchFilter} />

                    <Spinner loading={loading} isEmpty={!news.length}>
                        {/* Cards */}
                        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            {news?.map(news => (
                                <CardNews
                                    handelDelete={handelDelete}
                                    toggleModel={toggleModel}
                                    news={news}
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

export default News

News.layout = Admin
