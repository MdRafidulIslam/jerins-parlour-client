import React from 'react';
import antiTreatment from '../../../assets/icons/Group 1373.png'
import hair from '../../../assets/icons/Group 1372.png'
import skin from '../../../assets/icons/Group 1374.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Anti age face treatment',
            price: 199,
            description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
            img: antiTreatment
        },
        {
            id: 2,
            name: 'Hair Color & Styleing',
            price: 99,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            img: hair
        },
        {
            id: 3,
            name: 'Skin Care Treatment',
            price: 299,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: skin
        }
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Awesome Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-9 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;