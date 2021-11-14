import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <Link to="/" className={styles.logo}>
            <FontAwesomeIcon icon={faStreetView} />
            <span className={styles.company}>Company</span>
          </Link>
        </div>
        <ul className={styles.menu}>
          <Link to="/">
            <li className={styles.menuItem}>Home</li>
          </Link>
          <Link to="/about">
            <li className={styles.menuItem}>About</li>
          </Link>
          <Link to="/solution">
            <li className={styles.menuItem}>Solution</li>
          </Link>
          <Link to="/careers">
            <li className={styles.menuItem}>Careers</li>
          </Link>
          <Link to="/contact">
            <li className={styles.menuItem}>Contact Us</li>
          </Link>
        </ul>

        <FontAwesomeIcon className={styles.navToggle} icon={faBars} />
      </nav>
    );
  }
}

export default Navbar;
