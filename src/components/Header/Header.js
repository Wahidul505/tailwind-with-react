import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Cart', link: '/cart' },
        { id: 3, name: 'Description', link: '/description' },
        { id: 4, name: 'Contact', link: '/contact' },
    ]
    return (
        <div className='mb-6'>
            <div className='flex justify-end bg-green-200 md:hidden'>
                <div onClick={()=>setOpen(!open)} className='w-12 h-12 cursor-pointer'>
                { open? <XIcon /> : <MenuAlt1Icon />}
                </div>
            </div>
            <ul className={`bg-green-200 md:flex justify-center py-6 ${open?'block':'hidden'}`}>
                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>
        </div>
    );
};

export default Header;