import React from 'react'
import star from '../assets/star.png'
import flashlight from '../assets/flashlight.png'
import shield from '../assets/shield.png'
import find from '../assets/find.png'
import board from '../assets/board.png'

const Marketing = () => {
    return (
        <div className='mt-40'>
            <div>
                <h1 className='font-bold text-3xl sm:text-4xl mb-6 text-center'>Navigating Real Estate's Digital Landscape</h1>
                <p className='text-lg text-gray-700 mb-6 text-center'>Insights for Real Estate Marketing Advantage</p>
            </div>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6'>
                <div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <img className = 'w-7' src={star} alt="star" />
                        </div>
                        <div className='w-full max-w-md'>
                            <h1 className='font-bold text-lg'>Market Trends Analysis</h1>
                            <p className='text-gray-800'>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <img className = 'w-7' src={flashlight} alt="flashlight" />
                        </div>
                        <div className='w-full max-w-md'>
                            <h1 className='font-bold text-lg'>Targeted Buyer Persona</h1>
                            <p className='text-gray-800'>Understand and connect with your ideal property buyers.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <img className = 'w-7' src={shield} alt="shield" />
                        </div>
                        <div className='w-full max-w-md'>
                            <h1 className='font-bold text-lg'>Competitor Insights</h1>
                            <p className='text-gray-800'>Stand out in the property market with informed strategies.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mb-5'>
                        <div>
                            <img className = 'w-7' src={find} alt="find" />
                        </div>
                        <div className='w-full max-w-md'>
                            <h1 className='font-bold text-lg'>Visual Content Appeal</h1>
                            <p className='text-gray-800'>Captivate buyers with appealing visuals and immersive experiences.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-full' src={board} alt="board" />
                </div>
            </div>
        </div>
    )
}

export default Marketing