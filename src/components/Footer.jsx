import React from 'react';
import logo from '../assets/Osumare Logo.png';
import twitter from '../assets/twitter.png'
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import yt from '../assets/youtube.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <footer className='bg-gray-200 py-12 px-6 mt-28'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
                {/* Section 1: Logo & Contact Info */}
                <div>
                    <img src={logo} alt="Logo" className='w-28 mb-4' />
                    <p className='text-sm mb-5'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
                    <div className='mb-5'>
                        <h4 className='font-bold text-lg'>Address</h4>
                        <p className='text-sm mb-2'>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-lg'>Contacts</h4>
                        <p className='text-sm'>Email: hello@osumare.in</p>
                        <p className='text-sm'>Phone: +91 8459876226</p>
                    </div>
                </div>

                {/* Section 2: Menu */}
                <div>
                    <h3 className='text-lg font-semibold mb-4'>Menu</h3>
                    <ul className='space-y-2 text-sm'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Work</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Career</a></li>
                    </ul>
                </div>

                {/* Section 3: Social Media */}
                <div>
                    <h3 className='text-lg font-semibold mb-4'>Social</h3>
                    <div className='flex gap-4'>
                        <a className='w-10 p-2' href='#'><img src={fb} alt='Facebook' /></a>
                        <a className='w-10 p-2' href='#'><img src={twitter} alt="" /></a>
                        <a className='w-10 p-2' href='#'><img src={insta} alt="" /></a>
                        <a className='w-10 p-2' href='#'><img src={yt} alt="" /></a>
                        <a className='w-10 p-2' href='#'><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className='mt-10 text-center text-xs text-gray-400'>
                &copy; 2025 Osumare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
