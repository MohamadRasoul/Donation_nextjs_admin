import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserDropdown from '../Dropdowns/UserDropdown'
import ApplicationLogo from '../ApplicationLogo'

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState('hidden')
    const router = useRouter()
    return (
        <>
            <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
                <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
                    {/* Toggler */}
                    <button
                        className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                        type="button"
                        onClick={() =>
                            setCollapseShow('bg-white m-2 py-3 px-6')
                        }>
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link href="/admin/dashboard">
                        <a
                            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                            <div className='flex items-center'>
                                <ApplicationLogo className={'w-10'} />
                                <p className='ml-5'>Saved dreams</p>

                            </div>
                        </a>
                    </Link>
                    {/* User */}
                    <ul className="flex flex-wrap items-center list-none md:hidden">
                        <li className="relative inline-block">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
                            collapseShow
                        }>
                        {/* Collapse header */}
                        <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link href="/">
                                        <a
                                            
                                            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                                            Saved dreams
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex justify-end w-6/12">
                                    <button
                                        type="button"
                                        className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                                        onClick={() =>
                                            setCollapseShow('hidden')
                                        }>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
                            Admin Pages
                        </h6>
                        {/* Navigation */}

                        <ul className="flex flex-col list-none md:flex-col md:min-w-full">
                            <li className="items-center">
                                <Link href="/admin/dashboard">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/dashboard',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fas fa-tv mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/dashboard',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Dashboard
                                    </a>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/charitableFoundations">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/admin/charitableFoundations',
                                            ) !== -1 ||
                                                router.pathname.indexOf(
                                                    '/admin/donationPosts',
                                                ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-hand-holding-heart mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/admin/charitableFoundations',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        charitable Foundations
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
                            Users
                        </h6>
                        {/* Navigation */}

                        <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
                            <li className="items-center">
                                <Link href="/admin/donors">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/donors',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-circle-dollar-to-slot mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/donors',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Donors
                                    </a>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/sponsors">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/sponsors',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-hands-holding-child mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/sponsors',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Sponsors
                                    </a>
                                </Link>
                            </li>



                            <li className="items-center">
                                <Link href="/admin/donationStates">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/donationStates',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-circle-dollar-to-slot mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/donationStates',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Donation States
                                    </a>
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link href="/admin/sponsorShipStates">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/sponsorShipStates',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-hands-holding-child mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/sponsorShipStates',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        sponsorShip States
                                    </a>
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link href="/admin/donationCampaigns">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/donationCampaigns',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-solid fa-circle-dollar-to-slot mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/donationCampaigns',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Donation Campaigns
                                    </a>
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />

                        {/* Heading */}
                        <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
                            Others
                        </h6>
                        {/* Navigation */}

                        <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
                            <li className="items-center">
                                <Link href="/admin/cities">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/cities',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-regular fa-building mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/cities',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Cities
                                    </a>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/supportProgramTypes">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/supportProgramTypes',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-regular fa-window-restore mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/supportProgramTypes',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Support Program Types
                                    </a>
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link href="/admin/statusTypes">
                                    <a
                                        
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/statusTypes',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fa-regular fa-window-restore mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/statusTypes',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Status Types
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
