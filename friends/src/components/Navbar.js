import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className='navbar'>
            <li className='nav-button'>Friends List</li>
            <li className='nav-button'>Add Friend</li>
            <li className='nav-button'>Logout</li>
        </ul>
    )
}

export default Navbar;