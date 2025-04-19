import React from 'react'
import serachHouse from '../assets/search-house.png'
import virtual from '../assets/virtual.png'
import online from '../assets/online.png'
import SocialProof from '../assets/social-proof.png'
import mobile from '../assets/mobile.png'

const PropertyInq = () => {
    return (
        <div className='mt-40'>
            <div className='font-bold text-3xl sm:text-4xl mb-6 text-center'>
                <h1> Driving Property Inquiries to Conversions</h1>
            </div>
            <div>
                <p className='text-xl text-center mb-5'>Streamlined Strategies for Real Estate Success</p>
            </div>
            <div className='flex gap-2 justify-center items-center md:flex-row mt-10'>
                <div>
                    <img className='w-full p-3' src={serachHouse} alt="push img" />
                </div>
                <div className='w-130'>
                    <h1 className='font-bold text-2xl mb-4'>Optimized Path to Property Purchase</h1>
                    <p className='text-gray-700 text-lg mb-4'>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                    <button className='bg-blue-500 py-1 px-6 mt-4 rounded-full text-white'>Get started</button>
                </div>
            </div>
            <div className='font-bold text-3xl sm:text-4xl mb-6 mt-7 text-center'>
                <h1> Driving Property Inquiries to Conversions</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-6'>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={virtual} alt="virtual" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Call-to-Action Optimization</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={online} alt="online" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Landing Page Efficiency</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={SocialProof} alt="SocialProof" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Social Proof Utilization</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
                    </div>
                </div>
                <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div>
                        <img className='w-28 mb-4' src={mobile} alt="mobile" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Mobile-Friendly Experience</h1>
                    </div>
                    <div className='text-center  text-sm text-gray-700'>
                        <p>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInq