import React from 'react'

// components


// layout for page

import Admin from 'layouts/Admin.js'

export default function Tables() {
    return (
        <>
            <div className="flex justify-center w-full px-4 h-80">
                <div className="relative flex items-center justify-center w-full min-w-0 m-10 bg-white rounded-lg shadow-xl">
                    <div className="px-6 text-6xl ">Tables</div>
                </div>
            </div>
        </>
    )
}

Tables.layout = Admin
