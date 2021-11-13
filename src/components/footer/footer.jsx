import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>Let's talk</h1>
        <h2>sookyoungg@gmail.com</h2>
        <div>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <p>© 2021 Sookyoung Cho - All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
