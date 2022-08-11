import React from 'react'

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import FooterAdmin from 'components/Footers/FooterAdmin.js'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Admin({ children }) {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar />
                {/* Header */}
                <div className="relative pt-12 pb-32 bg-base-green md:pt-32">
                    <div className="absolute w-full">
                        {/* <div className="flex justify-center items-center -m-24">
                            <ApplicationLogo className={'w-32 opacity-60'} />
                        </div> */}
                    </div>
                </div>
                <div className="w-full px-4 mx-auto -m-24 md:px-10">
                    {children}
                    <FooterAdmin />
                </div>
            </div>
        </>
    )
}
