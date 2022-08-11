import Admin from 'layouts/Admin.js'

import useAuth from '@/hooks/auth'
import 'react-circular-progressbar/dist/styles.css';
import CardStatistics from '@/components/Cards/CardStatistics';
import DashboardFilter from '@/components/Filters/DashboardFilter';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Spinner from '@/components/UI/Spinner';

const Dashboard = () => {

    const [donateStatistics, setDonateStatistics] = useState({});
    const [postStatistics, setPostStatistics] = useState({});
    const [activityStatistics, setActivityStatistics] = useState({});
    const [loading, setLoading] = useState(true)

    const [monthFilter, setMonthFilter] = useState('');
    const [charitableFoundationFilter, setCharitableFoundationFilter] = useState('')
    //#region Hook   ####################################
    useAuth({
        middleware: 'auth'
    })
    const { data: donateStatisticsData, error: donateStatisticsError } =
        useSWR(`/admin/statistic/showDonateStatistics?month=${monthFilter}&charitablefoundation_id=${charitableFoundationFilter}`, { refreshInterval: 0 });

    const { data: postStatisticsData, error: postStatisticsError } =
        useSWR(`/admin/statistic/showPostStatistics?month=${monthFilter}&charitablefoundation_id=${charitableFoundationFilter}`, { refreshInterval: 0 });

    const { data: activityStatisticsData, error: activityStatisticsError } =
        useSWR(`/admin/statistic/showActivityStatistics?month=${monthFilter}&charitablefoundation_id=${charitableFoundationFilter}`, { refreshInterval: 0 });

    useEffect(() => {
        setLoading(true)

        if (donateStatisticsData || postStatisticsData || activityStatisticsData) {
            setDonateStatistics(
                donateStatisticsData?.data
            );
            setPostStatistics(
                postStatisticsData?.data
            );
            setActivityStatistics(
                activityStatisticsData?.data
            );
            setLoading(false)
        }

    }, [donateStatisticsData, postStatisticsData, activityStatisticsData]);
    //#endregion


    return (
        <>
            <div className="flex justify-center w-full px-4">
                <div className="relative flex-col items-center justify-center w-full min-w-0 m-10 bg-white rounded-lg shadow-xl">
                    <div className="p-6 text-6xl text-center ">Dashboard</div>

                    <DashboardFilter
                        setCharitableFoundationFilter={setCharitableFoundationFilter}
                        setMonthFilter={setMonthFilter}
                    />

                    <div className="flex flex-wrap mt-9">
                        <Spinner loading={loading}>

                            <CardStatistics
                                title={`donate `}
                                totalDonate={donateStatistics?.sumAllDonation}
                                totalDonateForCharitableFoundation={donateStatistics?.sumCharitablefoundationDonation}
                                color={'#1C1ED5'}
                                withCharitableFoundation={ charitableFoundationFilter != "" }
                            />
                            <CardStatistics
                                title={`post `}
                                totalDonate={postStatistics?.countAllDonationPost}
                                totalDonateForCharitableFoundation={postStatistics?.countCharitablefoundationDonationPost}
                                color={'#E85252'}
                                withCharitableFoundation={ charitableFoundationFilter != "" }
                            />

                            <CardStatistics
                                title={`activity `}
                                totalDonate={activityStatistics?.countAllDonation}
                                totalDonateForCharitableFoundation={activityStatistics?.countCharitablefoundationDonation}
                                color={'#FCF3A3'}
                                withCharitableFoundation={ charitableFoundationFilter != "" }
                            />

                        </Spinner>

                    </div>
                    <div className="grid h-auto grid-cols-2 gap-5 "></div>
                </div>

            </div>

        </>
    )
}

export default Dashboard

Dashboard.layout = Admin
