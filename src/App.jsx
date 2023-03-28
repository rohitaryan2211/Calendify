import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './style'
import {Calendar, MeetingCard, Navbar, Notifications, SchedulerCard, Titlebar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App
