import React from 'react'
import './MobileMenu.css';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
function MobileMenu() {
    return (
        <div className="nav-mobile-menu">
            <Link className="mob-nav__link" to="/">
                <HomeIcon className="nav__icon" />
                <span className="nav__text">Dashboard</span>
            </Link>
            <Link className="mob-nav__link" to="/search">
                <SearchIcon className="nav__icon" />
                <span className="nav__text">Search</span>
            </Link>
            <Link className="mob-nav__link" to="/cart">
                <ShoppingCartIcon className="nav__icon" />
                <span className="nav__text">Cart</span>
            </Link>
            <Link className="mob-nav__link" to="/me">
                <AccountCircleIcon className="nav__icon" />
                <span className="nav__text">Profile</span>
            </Link>

        </div>
    )
}

export default MobileMenu