import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const CardNews = ({ news, handelDelete, toggleModel }) => {
    return (
        <div
            key={news.id}
            className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <img
                    alt="blog photo"
                    src={news.image}
                    className="aspect-5/3 w-full object-cover object-center"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    {/* <p className="text-indigo-500 text-md font-medium">Article</p> */}
                    <p className="text-gray-800 min-h-12 dark:text-white text-xl font-medium mb-2">
                        {news.title}
                    </p>
                    <p className="text-gray-400 h-24 overflow-hidden dark:text-gray-300 font-light text-md">
                        {news.description}
                    </p>
                </div>
                <div className="flex justify-end items-center m-4">
                    <p className="text-gray-400 text-md font-medium">
                        {moment(news.updated_at).format('dddd, MMMM Do YYYY')}
                    </p>
                </div>
            </a>
            <div className="flex items-center justify-end px-3 py-2 bg-gray-100 dark:bg-gray-700">
                <button
                    onClick={() => handelDelete(news.id)}
                    className="text-gray-600 text-md py-1 px-3 hover:bg-gray-300 rounded-md hover:text-red-500">
                    <i className="fa-solid fa-trash-can "></i>
                </button>
                <button
                    onClick={e => toggleModel(e, false, news)}
                    className="text-gray-600 text-md ml-2 py-1 px-3 hover:bg-gray-300 rounded-md hover:text-blue-500">
                    <i className="fa-solid fa-pen-to-square "></i>
                </button>
            </div>
        </div>
    )
}

export default CardNews
