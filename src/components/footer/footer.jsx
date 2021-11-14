import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <h1 className={styles.talk}>Let's talk</h1>
        <h4 className={styles.email}>sookyoungg@gmail.com</h4>
        <div>
          <FontAwesomeIcon className={styles.gitIcon} icon={faGithub} />
        </div>
        <p className={styles.copyrights}>
          © 2021 Sookyoung Cho - All rights reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
