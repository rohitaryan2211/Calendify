import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './style'
import { Navbar, Home, Availability, Notifications, Profile, AccountSettings, Preferences, Logout } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/availability' element={<Availability/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/account' element={<AccountSettings/>}/>
        <Route path='/preferences' element={<Preferences/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
