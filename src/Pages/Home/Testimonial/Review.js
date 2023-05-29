import React from 'react';
import reviewImg from '../../../assets/icons/Group 33040.png'

const Review = ({ review }) => {
    const { name, img, review: userReview } = review
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg">{name}</h2>
                        <p>CEO,Manpol</p>
                    </div>

                </div>
                <p>{userReview}</p>
                <div className='mt-4 flex'>
                    <img src={reviewImg} className='w-6' alt="" />
                    <img src={reviewImg} className='w-6 ml-2' alt="" />
                    <img src={reviewImg} className='w-6 ml-2' alt="" />
                    <img src={reviewImg} className='w-6 ml-2' alt="" />
                    <img src={reviewImg} className='w-6 ml-2' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Review;