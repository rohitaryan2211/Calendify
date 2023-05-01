import React from 'react'
import styles from '../style'

const Profile = () => {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray `}>
          <div className={`${styles.boxWidth} mt-5 mb-5 ml-3 font-barlow text-black text-5xl`}>
            Profile
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray pb-10`}>
          <div className={`${styles.boxWidth} mt-4 ml-2 font-barlow text-lg text-black `}>
            <div className='bg-white pt-5 pb-20 mb-20 px-5 min-h-full'>
            <div className=" py-10 md:justify-start mx-auto pb-40">
          <div className="mb-2 ">
            <div>
                <label className="text-gray-700 font-bold mb-2 mr-14">Name:</label>
                <label htmlFor="name" className="text-gray-700 font-bold mb-2 mr-14"></label>
            </div>
            <div>
                <label htmlFor="email" className="text-gray-700 font-bold mb-2 mr-12">Email:</label>
            </div>
          </div>

        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile