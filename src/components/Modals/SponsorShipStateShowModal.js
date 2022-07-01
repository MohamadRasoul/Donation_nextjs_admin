import Portal from '../Util/Portal'
import moment from 'moment'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const SponsorShipStateShowModal = ({
    modelIsOpen,
    toggleModel,
    state,
    setLoading,
}) => {
    const [sponsorShips, SetSponsorShips] = useState([])

    const handeleDeliveryDone = async (e, sponsorShip) => {
        await axios
            .post(`/admin/sponsorShip/${sponsorShip.id}/updateDeliveryToDone`)
            .then(res => {
                SetSponsorShips(prevState =>
                    prevState.filter(
                        sponsorShipState =>
                            sponsorShipState.id != sponsorShip.id,
                    ),
                )
                setLoading(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        state && SetSponsorShips(state.sponsorShips_this_month_not_delivery)
    }, [state])

    return (
        <Portal>
            {modelIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <div className="flex justify-start items-center mb-10">
                                <img
                                    className="w-10 h-10 rounded mr-4"
                                    src={state.image}
                                    alt="user image"
                                />
                                <h3 className="text-lg font-bold text-center">
                                    {`Sponsor - ${state.name}`}
                                </h3>
                            </div>
                            <button
                                onClick={e => toggleModel(e, null)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className="font-medium text-gray-500 mb-7">
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    name :
                                </span>
                                {state.name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    ID Number :
                                </span>
                                {state.id_number}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    phone number :
                                </span>
                                {state.phone_number}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    father name :
                                </span>
                                {state.father_name}
                            </div>
                            <div className="mb-4">
                                <span className="mr-3 font-bold capitalize">
                                    mother name :
                                </span>
                                {state.mother_name}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5 my-5">
                            <img
                                className="h-40 w-full object-cover object-center"
                                src={state.idCard_front_image}
                                alt="user image"
                            />
                            <img
                                className="h-40 w-full object-cover object-center"
                                src={state.idCard_back_image}
                                alt="user image"
                            />
                        </div>

                        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="px-4 py-5 sm:px-6 border-b w-full">
                                <h3 className="text-lg capitalize leading-6 font-medium text-gray-900 dark:text-white">
                                    SponsorShip This Month Not delivery
                                </h3>
                            </div>
                            <ul className="flex flex-col divide divide-y">
                                {sponsorShips.map(sponsorShip => (
                                    <li className="flex flex-row">
                                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                <a
                                                    href="#"
                                                    className="block relative">
                                                    <img
                                                        alt="profil"
                                                        src={
                                                            sponsorShip.state_image
                                                        }
                                                        className="mx-auto object-cover rounded-full h-10 w-10 "
                                                    />
                                                </a>
                                            </div>
                                            <div className="flex-1 pl-1 mr-16">
                                                <div className="font-medium dark:text-white">
                                                    {sponsorShip.state_name}
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                    {moment(
                                                        sponsorShip.month_to_pay,
                                                    ).format(
                                                        'dddd, MMMM Do YYYY',
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                ${sponsorShip.amount}
                                                <span className="text-gray-300 text-sm  ml-1">
                                                    / month
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={e =>
                                                    handeleDeliveryDone(
                                                        e,
                                                        sponsorShip,
                                                    )
                                                }
                                                className="capitalize text-gray-400 bg-white border border-base-green focus:outline-none focus:bg-base-green focus:text-gray-100 focus:ring-2 hover:bg-secondary-green hover:text-white font-medium rounded-full text-sm px-2.5 py-1 ml-2 mb-2 ">
                                                done
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </Portal>
    )
}

export default SponsorShipStateShowModal
