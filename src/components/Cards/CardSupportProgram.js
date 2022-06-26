import React from 'react'
import Link from 'next/link'

const CardSupportProgram = ({ supportProgram, handelDelete, toggleModel }) => {
    return (
        <div
            key={supportProgram.id}
            className="overflow-hidden shadow-lg rounded-lg h-90 w-full md:w-80 cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <img
                    alt="blog photo"
                    src={supportProgram.image}
                    className=" w-full object-cover aspect-[5/3]"
                />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <a
                        href="#"
                        className="px-2 py-1 rounded-lg bg-secondary-green text-gray-100">
                        {supportProgram.support_program_type}
                    </a>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mt-6 mb-2">
                        {supportProgram.title}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 h-16 truncate font-light text-md">
                        {supportProgram.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <a href="#" className="block relative">
                                <img
                                    alt="profil"
                                    src={supportProgram.image_instructor}
                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                />
                            </a>
                            <div className="flex justify-center ml-4 text-md">
                                <p className="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-md font-medium">
                            {supportProgram.begin_date}
                        </p>
                    </div>
                </div>
            </a>
            <div className="flex items-center justify-end px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <button
                    onClick={() => handelDelete(supportProgram.id)}
                    className="text-gray-600 text-md py-1 px-3 hover:bg-gray-300 rounded-md hover:text-red-500">
                    <i className="fa-solid fa-trash-can "></i>
                </button>
                <button
                    onClick={e => toggleModel(e)}
                    className="text-gray-600 text-md ml-2 py-1 px-3 hover:bg-gray-300 rounded-md hover:text-blue-500">
                    <i className="fa-solid fa-pen-to-square "></i>
                </button>
            </div>
        </div>
    )
}

export default CardSupportProgram
