"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import { styles } from '../app/styles'
import { navLinks } from '@/constants'
import { logo, menu, close } from '@/assets'


const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link href='/' className='flex items-center gap-2'>
          <Image className='w-9 h-9 object-contain' src={logo} alt='logo' />
          <p className='flex text-white text-[18px] font-bold cursor-pointer' >Vinicio &nbsp; <span className='sm:block hidden' >| Dev</span></p>
        </Link>
        <ul className='justify-end list-none hidden sm:flex flex-grow gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => { setActive(link.title) }}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}></Image>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}>
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar