import React from 'react';
import makeup from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ExceptionMakeup = () => {
    return (
        <div className='hero mt-20'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Let us handle your screen <span className='text-primary'>Professionally.</span></h1>
                    <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className='flex'>
                        <div>
                            <h2 className="text-4xl font-bold text-primary">500+</h2>
                            <p>Happy Customer</p>
                        </div>
                        <div className='ml-10'>
                            <h2 className="text-4xl font-bold text-primary">16+</h2>
                            <p>Total Service</p>
                        </div>
                    </div>
                </div>
                <img src={makeup} className="rounded-lg w-1/2 mx-10 shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default ExceptionMakeup;