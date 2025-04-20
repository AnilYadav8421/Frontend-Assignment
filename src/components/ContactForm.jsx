import React from 'react';

const ContactForm = () => {
  return (
    <div className='max-w-4xl mx-auto mt-32 px-6'>
      <h1 className='text-3xl font-bold text-center mb-4'>Connect with Our Digital Marketing Experts</h1>
      <p className='text-lg text-center mb-10'>
      Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together
            </p>
      
      <form className='bg-white p-8 shadow-lg rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
              <input
                type='text'
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
              <input
                type='tel'
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Phone'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <input
                type='email'
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Your Email'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
            <textarea
              rows={9}
              className='w-full h-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Message'
            ></textarea>
          </div>
        </div>

        <div className='text-center mt-8'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition'
          >
            Get started
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
