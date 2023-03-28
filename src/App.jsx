import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './style.js'
import {Calendar, MeetingCard, Navbar, Notifications, SchedulerCard, Titlebar } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary  overflow-hidden'>
      <div className = '${style.paddingX} ${style.flexCenter}'> 
        <div className = '${style.boxWidth}'>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App
