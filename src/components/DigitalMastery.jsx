import React from 'react';
import push from '../assets/push.png';

const DigitalMastery = () => {
    return (
        <div className='mt-20 px-4 md:px-10 lg:px-20'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-6'>
                    Real Estate-Focused Digital Mastery
                </h1>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center gap-8 mt-10'>
                <div className='md:w-1/2'>
                    <h2 className='font-bold text-xl sm:text-2xl mb-4'>
                        Unlock the Potential of Digital Real Estate Excellence
                    </h2>
                    <p className='text-gray-700 text-sm sm:text-base mb-4'>
                        At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing.
                        Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
                    </p>
                    <button className='bg-blue-500 py-2 px-6 rounded-full text-white text-sm'>
                        Get started
                    </button>
                </div>
                <div className='md:w-1/2'>
                    <img className='w-full h-auto' src={push} alt="Push illustration" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default DigitalMastery;
