import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';
import styles from './about.module.css';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <header className={styles.about}>
          <h1 className={styles.aboutTitle}>About</h1>
          <div className={styles.aboutText}>
            We pursue relationships based on transparency, persistence, mutual
            trust, and integrity with our employees, customers and other
            business partners.
          </div>
        </header>
        <section className={styles.team}>
          <h1 className={styles.teamTitle}>Our team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi,
            magnam accusamus reiciendis voluptatibus ipsa dolores iste esse nam
            fugit nemo vitae odio quae quasi facere repudiandae sed. Sint,
            autem.
          </p>
          <div className={styles.people}>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
            <div className={styles.profile}>
              <FontAwesomeIcon
                className={styles.profileIcon}
                icon={faUserCircle}
              />
              <p>Full Name</p>
            </div>
          </div>
        </section>
        <div className={styles.hiring}>
          <h3>
            We're looking for smart and passionate people to join our team.
          </h3>
          <button className={styles.hiringBtn}>APPLY NOW</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
