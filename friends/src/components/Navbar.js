import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='navbar'>
            <Link to='/friendslist' className='nav-button'>Friend's List</Link>
            <Link to='/addfriend' className='nav-button'>Add Friend</Link>
            <Link to='/' className='nav-button'>Logout</Link>
        </section>
    )
}

export default Navbar;