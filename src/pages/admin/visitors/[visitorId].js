import Admin from 'layouts/Admin.js'

import { useAuth } from '@/hooks/auth'

const Visitor = () => {
    useAuth({
        middleware: 'auth',
        role: 'Admin',
    })
    return (
        <>
            <div className="flex justify-center w-full px-4 h-80">
                <div className="relative flex items-center justify-center w-full min-w-0 m-10 bg-white rounded-lg shadow-xl">
                    <div className="px-6 text-6xl ">Visitor by id</div>
                </div>
            </div>
        </>
    )
}

export default Visitor

Visitor.layout = Admin
