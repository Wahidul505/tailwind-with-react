import React, { useEffect } from 'react';
import Plan from '../Plan/Plan';

const Plans = () => {
    const plans = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Free deals',
                'Without Subscription',
                'For One Month',
                'Safe Browsing Experience'
            ]
        },
        {
            id: 2, name: 'Regular', price: 19.9, features: [
                'Free deals Included',
                'Save 10% of Your Money',
                'For One Month',
                'PrePaid System'
            ]
        },
        {
            id: 3, name: 'Premium', price: 99.9, features: [
                'Free and Regular deals Included',
                'Save 20% of Your Money',
                'For One Month',
                'Explore All the Premium facilities'
            ]
        },
    ]
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-4 my-8 mx-4'>
                {
                    plans.map(plan => <Plan
                        key={plan.id}
                        plan={plan}
                    ></Plan>)
                }
            </div>
        </div>
    );
};

export default Plans;