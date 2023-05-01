import React from 'react'
import { useState } from 'react'
import {logo2, close, hammenu, usersol} from '../assets';
import { navLinks, profileLinks } from '../constants';
import {Link} from 'react-router-dom'
import styles from '../style'



const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [profile, setProfile] = useState(false);
  const handleProfile = () => setProfile(!profile);
  const handleToggle = () => setToggle(!toggle);


  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <nav className='w-full flex mt-3 mb-3 justify-between items-center navbar'>

            <Link to={`/`}>
              <img src={logo2} alt="calendify" className="sm:flex hidden w-[220px]" />
            </Link>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-barlow font-normal cursor-pointer text-white text-[20px] ${index === navLinks.length ? 'mr-0' : 'mr-5'} ml-5`}>

                  <Link to={`/${nav.id}`}>
                    {nav.title}
                  </Link>

                </li>
              ))}
            </ul>

            <img 
                src={usersol} alt='menu' className= 'sm:flex hidden object-contain w-[30 px] h-[28px] ml-4'
                onClick={() => setProfile((prev) => (!prev))}
            />

            <div className={`${profile ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-[68px] right-0 mx-0 my-2 min-w[140px] rounded-none sidebar`} >
                  
              <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                {profileLinks.map((nav, index) => (
                  <li key={nav.id} className={`font-barlow font-normal cursor-pointer text-white text-[20px] ${index === profileLinks.length-1 ? 'mr-0' : 'mb-4'} `}>

                    <Link onClick={handleProfile} to={`/${nav.id}`}>
                      {nav.title}
                    </Link>

                  </li>
                ))}
              </ul>

            </div>

            {/* --------------------------------------------- */}
            {/* Mobile View */}
            <div className='sm:hidden flex flex-1 justify-between items-center'>
                
              <img 
                src={toggle ? close : hammenu} alt='menu' className='object-contain w-[28px] h-[28px]'
                onClick={() => setToggle((prev) => (!prev))}
              />

              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-[68px] left-0 mx-0 my-2 min-w[140px] rounded-none sidebar`} >
                  
                <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                  {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-barlow font-normal cursor-pointer text-white text-[20px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}`}>

                      <Link onClick={handleToggle} to={`/${nav.id}`}>
                        {nav.title}
                      </Link>

                    </li>
                  ))}
                </ul>

              </div>

              <Link to='/'>
                <img src={logo2} alt="calendify" className="flex justify-center w-[220px]"/>
              </Link>
              
              <img 
                src={usersol} alt='menu' className= 'object-contain w-[28px] h-[28px]'
                onClick={() => setProfile((prev) => (!prev))}
              />

              <div className={`${profile ? 'flex' : 'hidden'} p-6 bg-secondary absolute top-[78px] right-0 mx-0 my-2 min-w[140px] rounded-none sidebar`} >
                  
                <ul className='list-none flex justify-end items-center flex-1 flex-col'>
                  {profileLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-barlow font-normal cursor-pointer text-white text-[20px] ${index === profileLinks.length-1 ? 'mr-0' : 'mb-4'} `}>

                      <Link onClick={handleProfile} to={`/${nav.id}`}>
                        {nav.title}
                      </Link>

                    </li>
                  ))}
                </ul>

              </div>

            </div>
            </nav>
          </div>
        </div>
      </div>
    </>
    
    
    
  )
}

export default Navbar