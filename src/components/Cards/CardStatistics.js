import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default function CardStatistics({
  title = 'Statistics',
  totalDonate = 0,
  totalDonateForCharitableFoundation = 0,
  color = '#529b02',
  withCharitableFoundation
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isNaN(totalDonateForCharitableFoundation / totalDonate)) {
      setValue(totalDonateForCharitableFoundation / totalDonate)
    } else {
      setValue(0)
    }
  }, [totalDonate, totalDonateForCharitableFoundation])


  return (
    <>
      {
        // loading ?
        <div className="w-full px-4 mb-12 xl:w-4/12 xl:mb-0">
          <div className={`shadow-lg rounded-2xl p-6 bg-white border-b-8  mb-5`} style={{ borderColor: `${color}` }}>
            <div className={`flex justify-center text-3xl font-bold mb-10 `} style={{ color: `${color}` }}>
              {`${title} - statistics`}
            </div>
            <div className="flex flex-col justify-start capitalize items-center text-lg font-semibold text-gray-500">
              <div className="mb-3">{`total ${title} in month :`}</div>
              <div className="text-3xl mb-6">{totalDonate}</div>


              {withCharitableFoundation ?
                <div className="flex flex-col justify-start capitalize items-center text-lg font-semibold text-gray-500">

                  <div className={`rounded-full my-5  h-1 w-full mx-10`} style={{ backgroundColor: `${color}` }}></div>
                  <div className="mb-3">{`total ${title} for charitable Foundation :`}</div>
                  <div className="text-3xl">{totalDonateForCharitableFoundation}</div>
                  <div className="mx-5 my-10">
                    <CircularProgressbar
                      value={value}
                      maxValue={1}
                      text={`${Math.round(value * 100)}%`}
                      strokeWidth='10'
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `${color}`,
                        textColor: '#71717A',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })} />
                  </div>
                </div>
                : <></>
              }
            </div>

          </div>
        </div>
        // : <></>
      }

    </>
  );
}
