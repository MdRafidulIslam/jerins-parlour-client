import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ExceptionMakeup from '../ExceptionMakeup/ExceptionMakeup';
import Testimonial from '../Testimonial/Testimonial';
import ContactCard from '../ContactCard/ContactCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactCard></ContactCard>
            <ExceptionMakeup></ExceptionMakeup>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;