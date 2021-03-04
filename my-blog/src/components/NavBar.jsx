import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/articles-list">Posts</Link>
            </li>
            <li>
                <Link to="/tweets">Tweets</Link>
            </li>
            <li>
                <Link to="/about">About me</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;