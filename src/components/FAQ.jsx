import React, { useState } from 'react';

const faqs = [
    {
        question: 'What services does Osumare offer?',
        answer:
            'Osumare offers a range of digital marketing services tailored for the real estate industry, including SEO, PPC, web design, and social media marketing.',
    },
    {
        question: 'How long before I see results?',
        answer:
            'While it varies by service, most clients begin seeing measurable improvements within the first 60 to 90 days.',
    },
    {
        question: 'Do you provide analytics and reporting?',
        answer:
            'Yes, we provide detailed monthly performance reports along with insights and recommendations.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='max-w-2xl mx-auto mt-20 px-6'>
            <h2 className='text-3xl font-bold text-center mb-3'>Frequently Asked Questions</h2>
            <p className='text-lg text-center mb-10'>
                Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.
            </p>
            <div className='space-y-4'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className=' rounded-xl p-5 shadow-md transition-all duration-300'
                    >
                        <button
                            className='flex justify-between w-full text-left text-lg font-medium'
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className='text-xl'>{activeIndex === index ? '−' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className='mt-3 text-gray-700 text-sm'>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
