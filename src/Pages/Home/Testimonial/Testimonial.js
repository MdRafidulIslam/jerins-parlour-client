import React from 'react';
import people1 from '../../../assets/images/Ellipse 90.png'
import people2 from '../../../assets/images/Ellipse 91.png'
import people3 from '../../../assets/images/Ellipse 92.png'
import Review from './Review';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Miriam Barron',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            _id: 2,
            name: 'Nash Patrik',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            _id: 3,
            name: 'Bria Malone',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]
    return (
        <section className='my-20'>
            <div className='text-center'>
                <h4 className='text-4xl font-bold text-accent'>Testimonial</h4>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>

        </section>
    );
};

export default Testimonial;