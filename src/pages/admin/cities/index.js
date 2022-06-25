import React from 'react'
import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Link from 'next/link'

// layout for page
import Admin from 'layouts/Admin.js'

// components for page
import TableDropdown from '@/components/Dropdowns/TableDropdown'
import Spinner from '@/components/UI/Spinner'
import axios from '@/lib/axios'
import CityModal from '@/components/Modals/CityModal'

const Cities = () => {
    //#region State   ####################################
    const [cities, setCities] = useState([])
    const [loading, setLoading] = useState(true)
    const [modelIsOpen, setModelIsOpen] = useState(false)
    //#endregion

    //#region Hook   ####################################
    const router = useRouter()

    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })

    const { data: citiesData, citiesError } = useSWR(`admin/city/index`)

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
                console.log('city deleted successfully')

                setCities(prevState =>
                    prevState.filter(city => city.id != cityId),
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
        data.append('name', values.name)
        data.append('latitude', values.latitude)
        data.append('longitude', values.longitude)
        data.append('image', values.image)

        await axios
            .post('/admin/city/store', data)
            .then(res => {
                console.log(res.data.data.city)
                setModelIsOpen(false)

                setCities(prevState => [
                    res.data.data.city,
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
                <CityModal
                    modelIsOpen={modelIsOpen}
                    toggleModel={toggleModel}
                    handelSubmitModel={handelSubmitModel}
                />

                <div className="overflow-visible flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
                    <div className="px-4 py-3 mb-0 border-0 rounded-t">
                        <div className="flex flex-wrap items-center">
                            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
                                <h3 className="text-lg font-semibold text-blueGray-700">
                                    Cities
                                </h3>
                            </div>
                            <div className="">
                                <button
                                    onClick={e => toggleModel(e)}
                                    className="gap-2 btn btn-active btn-primary rounded-xl">
                                    <i className="text-lg fa-solid fa-plus"></i>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full sm:overflow-auto lg:overflow-visible">
                        {/* Projects table */}
                        <Spinner loading={loading}>
                            {cities.length ? (
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
                                                        <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 cursor-pointer whitespace-nowrap">
                                                            <div class="flex flex-row">
                                                                <div class="select-none cursor-pointer flex flex-1 items-center">
                                                                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                                        <a
                                                                            href="#"
                                                                            class="block relative">
                                                                            <img
                                                                                alt="profil"
                                                                                src={city.image}
                                                                                class="mx-auto object-cover rounded-full h-10 w-10 "
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div class="flex-1 pl-1 mr-16">
                                                                        <div class="font-medium dark:text-white">
                                                                            {
                                                                                city.name
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    </a>
                                                </Link>
                                                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    {`${city.latitude} , ${city.longitude}`}
                                                </td>
                                                <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                                    <TableDropdown
                                                        modelId={city.id}
                                                        handelDelete={
                                                            handelDelete
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full py-20">
                                    <i class="fa-solid fa-circle-exclamation text-7xl text-gray-100"></i>
                                    <p className="text-2xl text-gray-100">
                                        No Record
                                    </p>
                                </div>
                            )}
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
