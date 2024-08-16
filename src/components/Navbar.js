import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMoon, IoSunny } from "react-icons/io5";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { useState, useEffect } from 'react' 


export const Navbar = () => {
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    const links = [
        {name: 'About', path: '/about'},
        {name: 'Guides', path: '/guides'},
        {name: 'Docs', path: '/docs'},
    ]

    const [ darkMode, setDarkMode ] = useState(() => JSON.parse(localStorage.getItem('SHIM_DARK')))
    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')

    useEffect(() => {
        localStorage.setItem('SHIM_DARK', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(darkMode ? false : true)

 
  return (
    <nav className="bg-blue-600 dark:bg-blue-700 p-3 flex justify-between items-center text-white overflow-hidden">
        <div className="text-white font-bold text-lg">
            <NavLink to='/' style={activeStyle} className='text-xl flex justify-center items-center'><AiFillCodeSandboxCircle className='text-4xl' /> SHIM
            </NavLink>
        </div>
        
        <div className='flex align-middle text-center justify-between w-[15.5rem]'>
            <div className='flex justify-between w-[12rem]'>
                {links.map((link) => {
                    return (
                        <NavLink key={link.name} to={link.path} style={activeStyle} className='transition-all hover:opacity-50 active:scale-110 ease-in-out duration-50'>
                            {link.name}
                        </NavLink>
                    )
                })}
            </div>

        <button className='text-2xl transition-all ease-in-out duration-50 3s opacity-100 scale-100 active:scale-50 active:opacity-0 hover:scale-125' onClick={toggleDarkMode}>{darkMode ? <IoMoon /> : <IoSunny />}</button>

        </div>
        
    </nav>
  )
}
