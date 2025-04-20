import React from 'react'
import Testimonial_video from '../assets/Testimonial-video.png'
import TestimonialDP from '../assets/Testimonial-dp.png'
import symbol from '../assets/symbol.png'
import left from '../assets/scroll-left.png'
import right from '../assets/scroll-right.png'

const Testimonial = () => {
    return (
        <div className='mt-32 flex flex-col items-center'>
            <h1 className='font-bold text-3xl sm:text-4xl mb-6 text-center'>
                What Our Pharma Partners Say
            </h1>
            <p className='text-lg text-center mb-10'>
                Driving Transformations, One Brand at a Time
            </p>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <img
                    className='w-80 p-3'
                    src={Testimonial_video}
                    alt="Testimonial video preview"
                />

                <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                    <div className='flex items-center gap-4 mb-3'>
                        <img className='w-14' src={TestimonialDP} alt="Testimonial DP" />
                        <h1 className='text-lg font-bold'>Tabish Khan</h1>
                        <img className='w-10' src={symbol} alt="symbol" />
                    </div>
                    <p className='text-gray-700 leading-relaxed max-w-sm'>
                        Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
                    </p>
                </div>
            </div>

            <div className='mt-10 flex gap-7 justify-center'>
                <img className='w-10 cursor-pointer' src={left} alt="Scroll left" />
                <img className='w-10 cursor-pointer' src={right} alt="Scroll right" />
            </div>
        </div>

    )
}

export default Testimonial