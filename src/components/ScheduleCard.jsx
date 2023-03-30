import React from 'react'
import {schedule} from '../constants';

const ScheduleCard = () => {
  return (
    <>
        <div className="w-full rounded-lg shadow-lg lg:max-w-lg outline">
            <div className=" bg-gray-200 rounded-lg">
                <div className='bg-primary  rounded-lg'>
                    <h3 className="text-xl p-4 text-white">
                        React Tailwind Card Title
                    </h3>
                </div>
                <div className=' rounded-lg bg-gray-200'>
                    <p className=" p-4">
                        react with tailwind css simple card It is a long established
                        fact that a reader will be distracted.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScheduleCard