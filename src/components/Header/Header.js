import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <Link className='link' to='/home'>Home</Link>
            <Link className='link' to='/review'>Review</Link>
            <Link className='link' to='/dashboard'>Dashboard</Link>
            <Link className='link' to='/blogs'>Blogs</Link>
            <Link className='link' to='/about'>About</Link>
        </nav>
    );
};

export default Header;