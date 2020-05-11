import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const deleteToken = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    }

    return (
        <section className='navbar'>
            <div className='navbar-contents'>
                <div className='navbar-logo-box'>
                    <Link to='/friendslist'>
                        <img className='navbar-logo' src={require(`./../img/friends-logo-800.png`)} alt='Friends logo'></img>
                    </Link>
                </div>

                <div className='links'>
                    <Link to='/friendslist' className='nav-button'>Friend's List</Link>
                    <Link to='/addfriend' className='nav-button'>Add Friend</Link>
                    <Link to='/' className='nav-button' onClick={deleteToken}>Logout</Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar;