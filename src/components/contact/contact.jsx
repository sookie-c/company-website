import React, { Component } from 'react';
import Footer from '../footer/footer';
import styles from './contact.module.css';

class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <h2 className={styles.contactTalk}>Let's have a talk together!</h2>
        <div>
          <h1 className={styles.contactTitle}>Contact Us</h1>
          <p className={styles.contactText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            ducimus dolor praesentium tempora mollitia voluptatibus atque
            consectetur perspiciatis. Quis voluptatum commodi earum qui ipsum
            consequuntur exercitationem cum quam quasi inventore.
          </p>
        </div>
        <form className={styles.contactForm}>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="name">
              Your name (required):{' '}
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Your Email (required):{' '}
            </label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="message">
              Your Message:{' '}
            </label>
            <input className={styles.messageInput} type="text" />
          </div>
          <input className={styles.submitBtn} type="submit" value="submit" />
        </form>

        <Footer />
      </div>
    );
  }
}

export default Contact;
