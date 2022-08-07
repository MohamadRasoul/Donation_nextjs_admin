import Admin from 'layouts/Admin.js'

import useAuth from '@/hooks/auth'
import CardLineChart from '@/components/Cards/CardLineChart'
import CardBarChart from '@/components/Cards/CardBarChart'

const Dashboard = () => {
    useAuth({
        middleware: 'auth'
    })


    return (
        <>
            <div className="flex justify-center w-full px-4">
                <div className="relative flex-col items-center justify-center w-full min-w-0 m-10 bg-white rounded-lg shadow-xl">
                    <div className="p-6 text-6xl text-center ">Dashboard</div>
                    <div className="flex flex-wrap mt-9">
                        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                            <CardLineChart />
                        </div>
                        <div className="w-full px-4 xl:w-4/12">
                            <CardBarChart />
                        </div>
                    </div>
                    <div className="grid h-auto grid-cols-2 gap-5 "></div>
                </div>

            </div>
        </>
    )
}

export default Dashboard

Dashboard.layout = Admin
