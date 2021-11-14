import React, { Component } from 'react';
import Footer from '../footer/footer';
import styles from './contact.module.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submit: false,
      name: '',
      email: '',
      message: '',
    };
  }

  nameRef = React.createRef();
  emailRef = React.createRef();
  messageRef = React.createRef();

  success = () => {
    alert('Thanks for contacting us.');
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log(this.state.message);
  };

  fail = () => {
    alert('Please fill out all mandatory fields.');
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    let nameContent = this.nameRef.current.value;
    let emailContent = this.emailRef.current.value;
    let messageContent = this.messageRef.current.value;
    if (nameContent === '' || emailContent === '' || messageContent === '') {
      this.fail();
    } else {
      this.nameRef.current.value = '';
      this.emailRef.current.value = '';
      this.messageRef.current.value = '';
      this.success();
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
            <input
              className={styles.input}
              type="text"
              placeholder="full name"
              ref={this.nameRef}
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="email">
              Your Email (required):{' '}
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="sample@email.com.au"
              ref={this.emailRef}
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <div className={styles.form}>
            <label className={styles.label} htmlFor="message">
              Your Message:{' '}
            </label>
            <textarea
              className={styles.messageInput}
              type="text"
              placeholder="please leave a message here"
              ref={this.messageRef}
              value={this.state.message}
              onChange={this.handleMessage}
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
