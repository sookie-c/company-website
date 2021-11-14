import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };

  closeMenu = () => {
    this.setState({ isExpanded: false });
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <Link to="/" className={styles.logo}>
            <FontAwesomeIcon icon={faStreetView} />
            <span className={styles.company}>Company</span>
          </Link>
        </div>
        <ul className={isExpanded ? styles.menuColumn : styles.menu}>
          <Link to="/">
            <li className={styles.menuItem} onClick={this.closeMenu}>
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className={styles.menuItem} onClick={this.closeMenu}>
              About
            </li>
          </Link>
          <Link to="/solution">
            <li className={styles.menuItem} onClick={this.closeMenu}>
              Solution
            </li>
          </Link>
          <Link to="/careers">
            <li className={styles.menuItem} onClick={this.closeMenu}>
              Careers
            </li>
          </Link>
          <Link to="/contact">
            <li className={styles.menuItem} onClick={this.closeMenu}>
              Contact Us
            </li>
          </Link>
        </ul>

        <FontAwesomeIcon
          className={styles.navToggle}
          icon={faBars}
          onClick={this.handleToggle}
        />
      </nav>
    );
  }
}

export default Navbar;
