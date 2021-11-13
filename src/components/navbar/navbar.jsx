import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <header className={styles.navbar}>
        <div>
          <Link to="/" className={styles.logo}>
            <FontAwesomeIcon icon={faStreetView} />
            <span className={styles.company}>Company</span>
          </Link>
        </div>
        <ul className={styles.menu}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/solution">
            <li>Solution</li>
          </Link>
          <Link to="/careers">
            <li>Careers</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </header>
    );
  }
}

export default Navbar;
