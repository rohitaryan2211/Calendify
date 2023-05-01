import { useState } from 'react'
import { Navbar, Home, Availability, Profile, AccountSettings, Logout, Login, Signin} from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
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
