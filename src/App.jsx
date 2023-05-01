import { useState } from 'react'
import styles from './style'
import { Navbar, Home, Availability, Profile, AccountSettings, Logout, Login} from './components';
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
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/availability' element={<Availability/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/account' element={<AccountSettings/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
