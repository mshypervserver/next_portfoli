"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Menu from './Menu'

const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "/contactform",
    }

  ];
 const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(true);


  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href={'/'} className='text-5xl text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-600'>X.AI</Link>
            <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                          <Navlink href={link.path} title={link.title}  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {!navbarOpen && <Menu links={navLinks} />}
    </nav>
  )
}

export default Navbar