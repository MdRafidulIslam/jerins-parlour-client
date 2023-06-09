import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData()
    const { selectedDate, price, slot, treatment } = booking

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong>for your appointment on {selectedDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;