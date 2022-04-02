import React from 'react';
import { Pie, PieChart } from 'recharts';

const PieCharttt = ({products}) => {
    const slicedProducts = products.slice(0,20);
    return (
        <div className='flex justify-center'>
             <PieChart width={400} height={400}>
          <Pie
            dataKey="price"
            startAngle={360}
            endAngle={0}
            data={slicedProducts}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
        </div>
    );
};

export default PieCharttt;