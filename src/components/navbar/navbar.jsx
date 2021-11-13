import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <Link to="/">
            {' '}
            <FontAwesomeIcon icon={faStreetView} />
            <span>Company</span>
          </Link>
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/solution">Solution</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
