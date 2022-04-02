import React from 'react';
import { AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts';

const GraphChart = ({ products }) => {
    return (
        <>
            <h3 className='mb-6 text-2xl text-rose-700 font-semibold'>Graph Chart of ome Random Data</h3>
            <div className='flex justify-center'>
                    <AreaChart
                        width={500}
                        height={400}
                        data={products}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#008080" />
                    </AreaChart>
            </div>
        </>
    );
};

export default GraphChart;