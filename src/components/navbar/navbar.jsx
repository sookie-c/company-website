import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <FontAwesomeIcon icon={faStreetView} />
          <a href="#">Company</a>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Solution</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </>
    );
  }
}

export default Navbar;
