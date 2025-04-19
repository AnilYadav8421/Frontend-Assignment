import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Experties = () => {
    return (
        <div>
            <div className='font-bold text-3xl sm:text-4xl mb-6 mt-40  text-center'>
                <h1> Driving Property Inquiries to Conversions</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-6'>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={icon1} alt="icon1" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Effective CTAs</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={icon2} alt="icon2" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Conversion-Optimized Landing Pages</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={icon3} alt="icon3" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Trust Building with Social Proof</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={icon4} alt="icon4" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Mobile-First Success:</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                    </div>
                </div>
            </div>
            <div className='mt-32 text-center p-5'>
                <div>
                    <h1 className='font-bold text-lg mb-4'>Mobile-First Success:</h1>
                </div>
                <div className=' w-full text-sm text-gray-700 mx-auto'>
                    <p className=''> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                </div>
                <div>
                    <button className='bg-blue-500 py-2 px-10 rounded-full text-white mb-6 mt-5'>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Experties