import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  backToTop = () => {
    window.scrollTo(0, 0);
  };
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
        <FontAwesomeIcon
          className={styles.upBtn}
          icon={faArrowUp}
          onClick={this.backToTop}
        />
      </footer>
    );
  }
}

export default Footer;
