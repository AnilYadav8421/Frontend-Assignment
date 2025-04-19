import React from 'react'
import push from '../assets/push.png'

const DigitalMastery = () => {
  return (
    <div className='mt-40'>
        <div className='font-bold text-3xl sm:text-4xl mb-6 text-center'>
            <h1>Real Estate-Focused Digital Mastery</h1>
        </div>
        <div className='flex gap-2 justify-center items-center md:flex-row mt-10'>
            <div>
                <img className='w-full p-3' src={push} alt="push img" />
            </div>
            <div className='w-130'>
                <h1 className='font-bold text-2xl mb-4'>Unlock the Potential of Digital Real Estate Excellence</h1>
                <p className='text-gray-700 text-lg mb-4'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing Our range of specialized services is meticulously designed to catapult your brand's success in the ever evolving digital property market.</p>
                <button className='bg-blue-500 py-1 px-6 mt-4 rounded-full text-white'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default DigitalMastery