import React from 'react';
import styles from './Navbar.module.css'; 

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/images/LogoTransparent.png" alt="Logo" /> 
            </div>
            <div className={styles.navLinks}>
                <a href="#">How It Works</a>
                <a href="#">Sign Up</a>
                <a href="#">Log In</a>
            </div>
        </nav>
    );
}

export default Navbar;
