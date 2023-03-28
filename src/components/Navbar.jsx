import React from 'react'
import { useState } from 'react'
import {logo2} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo2} alt="calendify" className="w-[200px]"/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-barlow font-normal cursor-pointer text-white text-[20px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-5'} ml-5`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar