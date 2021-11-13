import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';

class About extends Component {
  render() {
    return (
      <>
        <header>
          <h1>About</h1>
        </header>
        <section>
          <div>
            We pursue relationships based on transparency, persistence, mutual
            trust, and integrity with our employees, customers and other
            business partners.
          </div>
        </section>
        <section>
          <h2>Our team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi,
            magnam accusamus reiciendis voluptatibus ipsa dolores iste esse nam
            fugit nemo vitae odio quae quasi facere repudiandae sed. Sint,
            autem.
          </p>
          <div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserCircle} />
              <p>Full Name</p>
            </div>
          </div>
        </section>
        <div>
          <h3>
            We're looking for smart and passionate people to join our team.
          </h3>
          <button>APPLY NOW</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
