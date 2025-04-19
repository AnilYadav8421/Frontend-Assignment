import React from 'react'
import grap from '../assets/graph.png'
import arrow from '../assets/arrow.png'
import social from '../assets/social.png'
import content from '../assets/content.png'
import vector2 from '../assets/vector2.png'
import vector from '../assets/vector.png'
import Solutions from '../assets/Solutions.png'
import video from '../assets/video.png'

const Services = () => {
    return (
        <div className='mt-40'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl sm:text-4xl mb-6'>Our Service Offerings</h1>
                <p className='text-xl mb-18'>Strategies that Drive Property Market Excellence</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6'>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={grap} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Automotive SEO</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-5 mb-4' src={arrow} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>PPC Precision</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={social} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Social Acceleration</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p> Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={content} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Content Excellence</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={vector2} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Web Design</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={vector} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Data-Driven Insights</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Leverage data to refine your strategies, making informed decisions that drive revenue growth.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={Solutions} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>End-to-End Solutions</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.</p>
                    </div>
                </div>
                <div className=' w-full py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg '>
                    <div>
                        <img className='w-6 mb-4' src={video} alt="graph" />
                    </div>
                    <div>
                        <h1 className='font-bold text-lg mb-4'>Video marketing</h1>
                    </div>
                    <div className='text-center text-xs'>
                        <p>Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services