import React from 'react';
import Feature from '../Feature/Feature';

const Plan = ({plan}) => {
    const {name, price, features} = plan;
    return (
        <div className='bg-emerald-500 p-4 rounded-xl text-white'>
            <h3 className='text-4xl bg-emerald-100 text-emerald-700 py-4 rounded-lg mb-2 font-semibold font-sans'>{name}</h3>
            <p className='text-2xl'>{price} <span className='text-lg'>/mo</span></p>
            <div className='text-left mb-4'>
            <h4 className='text-2xl font-semibold'>Features:</h4>
            {
                features.map( feature => <Feature feature={feature}></Feature>)
            }
            </div>
            <button className='bg-yellow-500 p-2 rounded-xl font-semibold cursor-pointer'>Subscribe</button>
        </div>
    );
};

export default Plan;