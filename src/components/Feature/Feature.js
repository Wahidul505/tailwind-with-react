import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckIcon className='w-6 h-6 mr-2 text-emerald-200' />
            <p>{feature}</p>
        </div>
    );
};

export default Feature;