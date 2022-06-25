import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserDropdown from '../Dropdowns/UserDropdown'

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
                    <Link href="/">
                        <a
                            href="#pablo"
                            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                            Notus NextJS
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
                                            href="#pablo"
                                            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                                            Notus NextJS
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
                            Admin Layout Pages
                        </h6>
                        {/* Navigation */}

                        <ul className="flex flex-col list-none md:flex-col md:min-w-full">
                            <li className="items-center">
                                <Link href="/admin/dashboard">
                                    <a
                                        href="#pablo"
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
                                        href="#pablo"
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/admin/charitableFoundations',
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
                                <Link href="/admin/donations">
                                    <a
                                        href="#pablo"
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/donations',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fas fa-map-marked mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/donations',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        Donations
                                    </a>
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link href="/admin/sponsors">
                                    <a
                                        href="#pablo"
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
                                                'fas fa-map-marked mr-2 text-sm ' +
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
                                <Link href="/admin/states">
                                    <a
                                        href="#pablo"
                                        className={
                                            'text-xs uppercase py-3 font-bold block ' +
                                            (router.pathname.indexOf(
                                                '/states',
                                            ) !== -1
                                                ? 'text-secondary-green hover:text-base-green'
                                                : 'text-blueGray-700 hover:text-blueGray-500')
                                        }>
                                        <i
                                            className={
                                                'fas fa-map-marked mr-2 text-sm ' +
                                                (router.pathname.indexOf(
                                                    '/states',
                                                ) !== -1
                                                    ? 'opacity-75'
                                                    : 'text-blueGray-300')
                                            }></i>{' '}
                                        States
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
                                <Link href="/admin/cities">
                                    <a
                                        href="#pablo"
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
                                                'fas fa-map-marked mr-2 text-sm ' +
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
                                        href="#pablo"
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
                                                'fas fa-map-marked mr-2 text-sm ' +
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
                                        href="#pablo"
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
                                                'fas fa-map-marked mr-2 text-sm ' +
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
