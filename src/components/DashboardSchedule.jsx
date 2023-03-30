import React from 'react'
import { schedule } from '../constants';

const DashboardSchedule = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 ss:grid-cols-1 gap-10'>
        {schedule.map(card => (
          <div className='bg-gray-200 rounded-lg outline'> 
            <div className='shadow-lg bg-primary rounded-lg'>
              <h3 className='p-4 text-2xl text-white'>{card.title}</h3>
            </div>
            <div className='bg-gray-200 text-md rounded-lg py-2 px-2'>
              <h4 className='px-2 py-1 text-md'>
                <span className='mr-5'>Date : </span>
                <span> {`${card.date}`} </span>
              </h4>
              <h4 className='px-2 py-1 text-md'>
                <span className='mr-4'>Time : </span>
                <span> {`${card.starttime} - ${card.endtime}`} </span>
              </h4>
              <h4 className='px-2 py-1 text-md'>
                <span className='mr-5'>With </span>
                <span> {card.people.map((man) => 
                <>
                  <span className='text-secondary'>{`${man.mname}`}</span>
                  <span className={`mr-1`}>,</span>
                </>
                )} </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashboardSchedule