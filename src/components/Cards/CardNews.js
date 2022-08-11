import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const CardNews = ({ news, handelDelete, toggleModel }) => {
    return (
        <div
            key={news.id}
            className="w-full m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90">
            <a  className="block w-full h-full">
                <img
                    alt="blog photo"
                    src={news.image}
                    className="object-cover object-center w-full aspect-5/3"
                />
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    {/* <p className="font-medium text-indigo-500 text-md">Article</p> */}
                    <p className="mb-2 text-xl font-medium text-gray-800 min-h-12 dark:text-white">
                        {news.title}
                    </p>
                    <p className="h-24 overflow-hidden font-light text-gray-400 dark:text-gray-300 text-md">
                        {news.description}
                    </p>
                </div>
                <div className="flex items-center justify-end m-4">
                    <p className="font-medium text-gray-400 text-md">
                        {moment(news.updated_at).format('MMMM Do YYYY')}
                    </p>
                </div>
            </a>
            <div className="flex items-center justify-end px-3 py-2 bg-gray-100 dark:bg-gray-700">
                <button
                    onClick={() => handelDelete(news.id)}
                    className="px-3 py-1 text-gray-600 rounded-md text-md hover:bg-gray-300 hover:text-red-500">
                    <i className="fa-solid fa-trash-can "></i>
                </button>
                <button
                    onClick={e => toggleModel(e, false, news)}
                    className="px-3 py-1 ml-2 text-gray-600 rounded-md text-md hover:bg-gray-300 hover:text-blue-500">
                    <i className="fa-solid fa-pen-to-square "></i>
                </button>
            </div>
        </div>
    )
}

export default CardNews
