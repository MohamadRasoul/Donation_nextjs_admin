import React from 'react'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import useSWR from 'swr'
import moment from 'moment'

// components for page
import Spinner from '@/components/UI/Spinner'
import HeaderNavbarForPost from '@/components/Navbars/HeaderNavbarForPost'
import NewsModal from '@/components/Modals/NewsModal'
import CardNews from '@/components/Cards/CardNews'

// layout for page
import Admin from 'layouts/Admin.js'
import { useRouter } from 'next/router'

const News = () => {
    //#region State   ####################################
    const [news, setNews] = useState([])
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

    const { data: newsData, error } = useSWR(
        `admin/news/charitablefoundation/${charitableFoundationId}/index`,
    )

    useEffect(() => {
        if (newsData) {
            setNews(newsData.data.news)
            setLoading(false)
        }
    }, [newsData])
    //#endregion

    //#region Function   ####################################

    const handelDelete = async newsId => {
        await axios
            .delete(`/admin/news/${newsId}/destroy`)
            .then(res => {
                console.log('news deleted successfully')

                setBranches(prevState =>
                    prevState.filter(
                        news => news.id != newsId,
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
            .post('/admin/news/store', data)
            .then(res => {
                console.log(res.data.data.news)
                setModelIsOpen(false)

                setNews(prevState => [
                    res.data.data.news,
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
                <NewsModal
                    modelIsOpen={modelIsOpen}
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

                <div className="w-full rounded-xl bg-white p-12">
                    {/* Filter Part */}
                    <div className="header flex items-center justify-end mb-12">
                        <div className="text-end">
                            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <div className=" relative">
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
