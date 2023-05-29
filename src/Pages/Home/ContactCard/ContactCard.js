import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Card from './Card';


const ContactCard = () => {
    const cartData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'New Doha, Mohakhali Road, Bangladesh ',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456 789',
            icon: phone,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
            {
                cartData.map(card => <Card key={card.id} card={card}></Card>)
            }

        </div>
    );
};

export default ContactCard;