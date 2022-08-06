import React from 'react'
import { useEffect, useState } from 'react'
import useAuth from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'
import axios from '@/lib/axios'

// Layout for page
import Admin from 'layouts/Admin.js'

// Components for page
import TableDropdown from '@/components/Dropdowns/TableDropdown'
import Spinner from '@/components/UI/Spinner'
import CityModal from '@/components/Modals/CityModal'

const Cities = () => {
    //#region State   ####################################
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalIsAdd, setModalIsAdd] = useState()
    const [modelForUpdate, setModelForUpdate] = useState()
    //#endregion

    //#region Hook   ####################################
    useAuth({
        middleware: 'auth',
    })

    const { data: citiesData, error: citiesError } = useSWR(`admin/city/index`)

    useEffect(() => {
        if (citiesData) {
            setCities(citiesData.data.cities)

            setLoading(false)
        }
    }, [citiesData])

    //#endregion

    //#region Function   ####################################

    const handelDelete = async cityId => {
        await axios
            .delete(`/admin/city/${cityId}/destroy`)
            .then(res => {
                setCities(prevState =>
                    prevState.filter(city => city.id != cityId),
                )
            })
            .catch(err => console.log(err))
    }

    const toggleModel = (e, isAdd = true, model = {}) => {
        e.preventDefault()
        setModalIsOpen(prevState => !prevState)
        setModalIsAdd(isAdd)
        setModelForUpdate(model)
    }

    const handelSubmitModel = async values => {
        
        const data = new FormData()
        data.append('name', values.name)
        data.append('latitude', values.latitude)
        data.append('longitude', values.longitude)
        data.append('image', values.image)

        await axios
            .post(
                modalIsAdd
                    ? '/admin/city/store'
                    : `/admin/city/${modelForUpdate.id}/update`,
                data,
            )
            .then(res => {
                setModalIsOpen(false)

                modalIsAdd
                    ? setCities(prevState => [res.data.data.city, ...prevState])
                    : setLoading(true)
            })
            .catch(err => console.log(err))
    }
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            <div className="relative">
                <CityModal
                    modalIsOpen={modalIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                    modalIsAdd={modalIsAdd}
                    city={modelForUpdate}
                />

                <div className="flex flex-col w-full min-w-0 mb-6 overflow-visible break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Cities
                                </h3>
                            </div>
                            <button
                                onClick={e => toggleModel(e)}
                                className="gap-2 btn btn-active btn-primary rounded-xl">
                                <i className="text-lg fa-solid fa-plus"></i>
                                Add
                            </button>
                        </div>
                    </div>
                    <div className="block w-full sm:overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading} isEmpty={!cities.length}>
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Name
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-blueGray-50 text-blueGray-500 border-blueGray-100"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cities.map(city => (
                                        <tr className="">
                                            <Link
                                                href={`/admin/city/${city.id}`}>
                                                <a>
                                                    <div className="flex flex-row items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                        <div className="flex items-center flex-1 cursor-pointer select-none">
                                                            <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                                <a className="relative block">
                                                                    <img
                                                                        alt="profil"
                                                                        src={
                                                                            city.image
                                                                        }
                                                                        className="object-cover w-10 h-10 mx-auto rounded-full "
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="flex-1 pl-1 mr-16">
                                                                <div className="font-medium dark:text-white">
                                                                    {city.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                {`${city.latitude} , ${city.longitude}`}
                                            </td>
                                            <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                <TableDropdown
                                                    model={city}
                                                    handelDelete={handelDelete}
                                                    toggleModel={toggleModel}
                                                />
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

export default Cities

Cities.layout = Admin
