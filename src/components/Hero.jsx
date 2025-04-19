import React from 'react'
import hero_img from '../assets/Hero image.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-8'>
        <div className='text-center'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl mb-6'>Elevate <span className='text-blue-700 font-bold'>Real Estate Success </span> with <br /> Osumare's Digital Experties</h1>
            <p className='text-lg text-gray-700 mb-6'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
        </div>
        <div>
            <button className='bg-blue-700 py-2 px-10 rounded-full text-white mb-6'>Get started</button>
        </div>
        <div>
            <img className='w-120' src={hero_img} alt="Real estate img" />
        </div>
    </div>
  )
}

export default Hero