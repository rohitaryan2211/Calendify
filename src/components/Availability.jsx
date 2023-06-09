import React from 'react'
import {AvailCalendar} from '../components';
import styles from '../style'

const Availability = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray `}>
        <div className={`${styles.boxWidth} mt-5 mb-5 ml-3 font-barlow text-black text-5xl`}>
          Availability
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray pb-10`}>
        <div className={`${styles.boxWidth} mt-4 ml-2 font-barlow text-lg text-black `}>
          <div className='bg-white pt-5 pb-20 mb-20 px-5 min-h-full'>
            <AvailCalendar/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Availability