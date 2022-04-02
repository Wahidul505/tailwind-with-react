import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GraphChart from '../GraphChart/GraphChart';
import PieCharttt from '../PieCharttt/PieCharttt';
import Plans from '../Plans/Plans';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('data.json')
        .then(data => setProducts(data.data))
    },[])
    return (
        <div>
            <h2 className='text-3xl text-teal-500'>We Are Here For Managing Your Subscription Packages!</h2>
            <Plans></Plans>
            <GraphChart products={products}></GraphChart>
            <PieCharttt products={products}></PieCharttt>
        </div>
    );
};

export default Home;