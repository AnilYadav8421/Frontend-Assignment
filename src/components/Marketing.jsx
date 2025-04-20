import React from 'react';
import star from '../assets/star.png';
import flashlight from '../assets/flashlight.png';
import shield from '../assets/shield.png';
import find from '../assets/find.png';
import board from '../assets/board.png';

const Marketing = () => {
    return (
        <div className='mt-20 px-6 md:px-12 lg:px-20'>
            <div>
                <h1 className='font-bold text-3xl sm:text-4xl mb-4 text-center'>
                    Navigating Real Estate's Digital Landscape
                </h1>
                <p className='text-lg text-gray-700 mb-8 text-center'>
                    Insights for Real Estate Marketing Advantage
                </p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16'>
                <div className='space-y-8'>
                    <div className='flex items-start gap-4'>
                        <img className='w-7' src={star} alt="star" />
                        <div className='w-full'>
                            <h2 className='font-bold text-lg'>Market Trends Analysis</h2>
                            <p className='text-gray-800'>
                                Predictive insights to guide real estate strategies.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <img className='w-7' src={flashlight} alt="flashlight" />
                        <div className='w-full'>
                            <h2 className='font-bold text-lg'>Targeted Buyer Persona</h2>
                            <p className='text-gray-800'>
                                Understand and connect with your ideal property buyers.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <img className='w-7' src={shield} alt="shield" />
                        <div className='w-full'>
                            <h2 className='font-bold text-lg'>Competitor Insights</h2>
                            <p className='text-gray-800'>
                                Stand out in the property market with informed strategies.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <img className='w-7' src={find} alt="find" />
                        <div className='w-full'>
                            <h2 className='font-bold text-lg'>Visual Content Appeal</h2>
                            <p className='text-gray-800'>
                                Captivate buyers with appealing visuals and immersive experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img className='w-full h-auto' src={board} alt="board" />
                </div>
            </div>
        </div>
    );
};

export default Marketing;
