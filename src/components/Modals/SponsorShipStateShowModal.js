
import moment from 'moment'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const SponsorShipStateShowModal = ({
    modalIsOpen,
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
                toast.success('Success Updated')

                setLoading(true)
            })
            .catch(err => {
                toast.error('Sorry... Error With Updated')
                setLoading(false)
            })
    }

    useEffect(() => {
        state && SetSponsorShips(state.sponsorShips_this_month_not_delivery)
    }, [state])

    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <div className="flex items-center justify-start mb-10">
                                <img
                                    className="w-10 h-10 mr-4 rounded"
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
                                className="object-cover object-center w-full h-40"
                                src={state.idCard_front_image}
                                alt="user image"
                            />
                            <img
                                className="object-cover object-center w-full h-40"
                                src={state.idCard_back_image}
                                alt="user image"
                            />
                        </div>

                        <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                            <div className="w-full px-4 py-5 border-b sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-gray-900 capitalize dark:text-white">
                                    SponsorShip This Month Not delivery
                                </h3>
                            </div>
                            <ul className="flex flex-col w-full divide-y divide">
                                {state.usersSponsor.map(userSponsor => (
                                    <li className="flex flex-row justify-between w-full p-4">
                                        <div className="pl-1 mr-16 ">
                                            <div className="font-medium dark:text-white">
                                                {userSponsor.name}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-200">
                                                {moment(
                                                    userSponsor.month_to_pay,
                                                ).format(
                                                    'MMMM Do YYYY',
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-200">
                                            ${userSponsor.donations.reduce((accumulator, current) => accumulator + current.amount, 0)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SponsorShipStateShowModal
