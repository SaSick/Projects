import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/layout.css';
import SearchForm from './SearchForm';

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header>
                <div className={'head'}>
                    <div className={'header'}>
                        <div className={'burger-menu'} onClick={toggleNav}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h1>BooKz</h1>
                        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
                            <ul className={'nav-ul'}>
                                <li className={'nav-li'}>
                                    <Link to="/">Main</Link>
                                </li>
                                <li className={'nav-li'}>
                                    <Link to="/books">Books</Link>
                                </li>
                                <li className={'nav-li'}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={'nav-li'}>
                                    <Link to="/shelf">My shelf</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={'user-sec'}>
                            <div className={'inp'}>
                                <SearchForm />
                            </div>
                            <ul>
                                <li>
                                    <Link to="/loginpage">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;
