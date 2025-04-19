import React from 'react'
import logo from '../assets/Osumare Logo.png'

const Nav = () => {
  return (
    <div className='flex justify-between items-center p-3 px-9'>
        <div>
            <img className='w-24' src={logo} alt="Logo" />
        </div>
        <div>
            <button className='border py-1 px-8 rounded-full text-sm font-bold'>Contact us</button>
        </div>
    </div>
  )
}

export default Nav