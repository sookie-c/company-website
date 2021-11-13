import React, { Component } from 'react';
import Footer from '../footer/footer';

class Contact extends Component {
  render() {
    return (
      <>
        <div>
          <h3>Let's have a talk together!</h3>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            ducimus dolor praesentium tempora mollitia voluptatibus atque
            consectetur perspiciatis. Quis voluptatum commodi earum qui ipsum
            consequuntur exercitationem cum quam quasi inventore.
          </p>
        </div>
        <div>
          <div>
            <label for="name">Your name (required)</label>
            <input type="text" />
          </div>
          <div>
            <label for="email">Your Email (required)</label>
            <input type="text" />
          </div>
          <div>
            <label for="message">Your Message</label>
            <input type="text" />
          </div>
          <button>SUBMIT</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
