import React from 'react';
import hero_img from '../assets/Hero image.png';

const Hero = () => {
    return (
        <div className='flex flex-col items-center px-4 py-10 md:px-10 lg:px-20'>
            <div className='text-center max-w-4xl'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight'>
                    Elevate <span className='text-blue-500 font-bold'>Real Estate Success</span> with <br className='hidden sm:block' />
                    Osumare's Digital Expertise
                </h1>
                <p className='text-base sm:text-sm text-gray-700 mb-6'>
                    Tailored Solutions for Thriving in the Digital Real Estate Landscape
                </p>
                <button className='bg-blue-500 py-2 px-8 sm:px-10 rounded-full text-white text-sm sm:text-base'>
                    Get started
                </button>
            </div>
            <div className='mt-10 w-full max-w-4xl'>
                <img className='w-full h-auto' src={hero_img} alt="Real estate" loading="lazy"/>
            </div>
        </div>
    );
};

export default Hero;
