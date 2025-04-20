import React from 'react';
import serachHouse from '../assets/search-house.png';
import virtual from '../assets/virtual.png';
import online from '../assets/online.png';
import SocialProof from '../assets/social-proof.png';
import mobile from '../assets/mobile.png';

const PropertyInq = () => {
  return (
    <div className='mt-20 px-6 md:px-12 lg:px-20'>
      {/* Main Header Section */}
      <div className='font-bold text-3xl sm:text-4xl mb-6 text-center'>
        <h1>Driving Property Inquiries to Conversions</h1>
      </div>
      <div>
        <p className='text-xl text-center mb-5'>
          Streamlined Strategies for Real Estate Success
        </p>
      </div>
      
      {/* Main Content Section */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mt-10'>
        <div className='lg:w-1/2'>
          <img className='w-full p-3' src={serachHouse} alt="search house" />
        </div>
        <div className='lg:w-1/2'>
          <h1 className='font-bold text-2xl mb-4'>Optimized Path to Property Purchase</h1>
          <p className='text-gray-700 text-lg mb-4'>
            In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. 
            At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
          </p>
          
          {/* Centering the Button on Small Screens */}
          <div className='flex justify-center mt-4'>
            <button className='bg-blue-500 py-2 px-8 rounded-full text-white'>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section (Four Cards) */}
      <div className='font-bold text-3xl sm:text-4xl mb-6 mt-7 text-center'>
        <h1>Core Features Driving Conversions</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-6'>
        {/* Call-to-Action Optimization */}
        <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div>
            <img className='w-28 mb-4' src={virtual} alt="virtual" />
          </div>
          <div>
            <h1 className='font-bold text-lg mb-4'>Call-to-Action Optimization</h1>
          </div>
          <div className='text-center text-sm text-gray-700'>
            <p>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
          </div>
        </div>

        {/* Landing Page Efficiency */}
        <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div>
            <img className='w-28 mb-4' src={online} alt="online" />
          </div>
          <div>
            <h1 className='font-bold text-lg mb-4'>Landing Page Efficiency</h1>
          </div>
          <div className='text-center text-sm text-gray-700'>
            <p>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
          </div>
        </div>

        {/* Social Proof Utilization */}
        <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div>
            <img className='w-28 mb-4' src={SocialProof} alt="Social Proof" />
          </div>
          <div>
            <h1 className='font-bold text-lg mb-4'>Social Proof Utilization</h1>
          </div>
          <div className='text-center text-sm text-gray-700'>
            <p>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.</p>
          </div>
        </div>

        {/* Mobile-Friendly Experience */}
        <div className='w-full max-w-sm mx-auto py-4 px-7 flex flex-col items-center rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <div>
            <img className='w-28 mb-4' src={mobile} alt="mobile" />
          </div>
          <div>
            <h1 className='font-bold text-lg mb-4'>Mobile-Friendly Experience</h1>
          </div>
          <div className='text-center text-sm text-gray-700'>
            <p>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInq;
