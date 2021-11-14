import React, { Component } from 'react';
import Footer from '../footer/footer';
import styles from './contact.module.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  submit = (e) => {
    e.preventDefault();
    let nameContent = this.nameRef.current.value;
    let emailContent = this.emailRef.current.value;
    let messageContent = this.messageRef.current.value;
    if (nameContent === '' || emailContent === '' || messageContent === '') {
      alert('Please fill out all mandatory fields.');
    } else {
      this.nameRef.current.value = '';
      this.emailRef.current.value = '';
      this.messageRef.current.value = '';
      alert('Thanks for contacting us.');
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
            <input className={styles.input} type="text" ref={this.nameRef} />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Your Email (required):{' '}
            </label>
            <input className={styles.input} type="text" ref={this.emailRef} />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="message">
              Your Message:{' '}
            </label>
            <textarea
              className={styles.messageInput}
              type="text"
              ref={this.messageRef}
            />
          </div>
          <input
            className={styles.submitBtn}
            type="submit"
            value="submit"
            onClick={this.submit}
          />
        </form>

        <Footer />
      </div>
    );
  }
}

export default Contact;
