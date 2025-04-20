import React from 'react'
import logo from '../assets/Osumare Logo.png'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3">
      <div>
        <img className="w-24 sm:w-28" src={logo} alt="Logo" />
      </div>
      <div>
        <button className="border border-gray-800 py-2 px-5 rounded-full text-sm font-semibold ">
          Contact us
        </button>
      </div>
    </nav>
  )
}

export default Nav
