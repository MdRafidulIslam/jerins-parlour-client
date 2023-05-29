import React from 'react';
import makeUp from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'



const Banner = () => {
    return (
        <div className='hero bg-secondary'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={makeUp} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div className='ml-10'>
                    <h1 className="text-5xl font-bold text-accent">BEAUTY SALON FOR EVERY WOMAN</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-primary text-white">Get an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;