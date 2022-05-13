import { useState } from 'react'

// components



// layout for page

import Admin from 'layouts/Admin.js'

export default function Test() {
    const [showModal, setShowModal] = useState(false)
    const [openTab, setOpenTab] = useState(1)
    return (
        <>
            <div className="flex justify-center w-full px-4 h-80">
                <div className="relative flex items-center justify-center w-full min-w-0 m-10 bg-white rounded-lg shadow-xl">
                    <div className="px-6 text-6xl ">Test</div>
                </div>
            </div>
        </>
    )
}

Test.layout = Admin
