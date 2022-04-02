import React from 'react';

const NavLink = ({route}) => {
    const {name, link} = route;
    return (
        <li className='text-xl mr-6'>
           <a href={link}>{name}</a> 
        </li>
    );
};

export default NavLink;