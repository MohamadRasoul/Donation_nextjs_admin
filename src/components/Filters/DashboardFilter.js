import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const DashboardFilter = ({
    setCharitableFoundationFilter,
    setMonthFilter,
}) => {
    //#region Hook   ####################################
    const [charitablefoundations, setCharitablefoundations] = useState([]);
    const [lastMonths, setLastMonths] = useState([])

    const { data: charitablefoundationsData, charitablefoundationsError } =
        useSWR('/admin/charitablefoundation/index');

    useEffect(() => {
        getLastMonths()
        if (charitablefoundationsData) {
            setCharitablefoundations(
                charitablefoundationsData.data.charitablefoundations
            );
        }
    }, [charitablefoundationsData]);
    //#endregion

    //#region Function   ####################################
    const getLastMonths = () => {
        let monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        let d = new Date();
        d.setDate(1);
        let months = []
        for (let i = 0; i <= 11; i++) {
            months.push({
                id: d.getDay() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear(),
                name: monthName[d.getMonth()] + ' ' + d.getFullYear()
            });
            d.setMonth(d.getMonth() - 1);
        }
        setLastMonths(months);
    }
    console.log(lastMonths);
    //#endregion
    return (
        <>
            <div className="flex flex-col mx-10 mb-6 sm:items-start sm:justify-start lg:flex-row lg:items-center lg:justify-evenly">
                <div className="mb-4 text-xl font-semibold text-base-green">
                    Filter :
                </div>
                {/* Filter By CharitableFoundation */}
                <div className="flex my-5 justify-start lg:justify-between items-center whitespace-nowrap">
                    <label
                        htmlFor="branches"
                        className="block mr-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Select CharitableFoundation :
                    </label>
                    <select
                        onChange={e => setCharitableFoundationFilter(e.target.value)}
                        id="branches"
                        className="pr-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="">
                            All CharitableFoundation
                        </option>

                        {charitablefoundations.map(charitablefoundation => (
                            <option value={charitablefoundation.id} key={charitablefoundation.id}>
                                {charitablefoundation.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Filter By Months */}
                <div className="flex my-5 justify-between sm:justify-between lg:justify-start items-center whitespace-nowrap">
                    <label
                        htmlFor="branches"
                        className="block mr-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Select Month :
                    </label>
                    <select
                        onChange={e => setMonthFilter(e.target.value)}
                        id="branches"
                        className="pr-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="">
                            All Months
                        </option>

                        {lastMonths.map(month => (
                            <option value={month.id} key={month.id}>
                                {month.name}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </>
    );
};

export default DashboardFilter;
