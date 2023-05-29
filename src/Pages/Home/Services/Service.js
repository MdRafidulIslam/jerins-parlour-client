import React from 'react';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-36" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-primary'>${price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;