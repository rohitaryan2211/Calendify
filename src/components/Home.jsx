import React from 'react'
import { useState } from 'react'
import {DashboardCalendar, DashboardSchedule} from '../components';
import styles from '../style'
import {titles} from '../constants'

function TabGroup() {

  const [currentTab, setCurrentTab] = useState('1');
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  }

  return (
    <>
      <div className='tabs bg-title_gray'>
        {titles.map((tab, i) =>
          <button key={i} className='py-3 px-3 text-lg' id={tab.id}  disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
        )}
      </div>
      <div className='content'>
                {titles.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div>
                          {tab.id === 1 ? <DashboardSchedule/> : <DashboardCalendar/>}
                        </div>}
                    </div>
                )}
            </div>
    </>
  );
}

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray `}>
        <div className={`${styles.boxWidth} mt-5 mb-5 ml-3 font-barlow text-black text-5xl`}>
          Dashboard
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-title_gray pb-10`}>
        <div className={`${styles.boxWidth} mt-4 ml-2 font-barlow text-lg text-black `}>
          <TabGroup/>
        </div>
      </div>
    </div>
  )
}

export default Home