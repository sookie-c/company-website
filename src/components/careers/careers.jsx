import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';

class Careers extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Careers</h1>
          <h4>
            Dolor quaerat non ad? Mollitia, quis eligendi quasi nam, consectetur
            dolore temporibus, nisi exercitationem iure necessitatibus accusamus
            harum quam et.
          </h4>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nam
            assumenda totam perspiciatis, rem optio repellendus quas, quasi fuga
            dolore, harum nobis enim eligendi. Animi magnam dicta sunt dolores
            voluptates.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            beatae quis minus amet id sit expedita molestias ipsum suscipit?
          </p>
          <button>APPLY NOW</button>
        </div>
        <div>
          <img src="img/city.jpg" alt="city" />
        </div>
        <div>
          <h2>Culture at Work</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              dignissimos laudantium. Porro odio consequuntur quibusdam corrupti
              reprehenderit reiciendis, quae commodi impedit ut ipsum molestiae
              mollitia necessitatibus, quisquam adipisci labore nulla!
            </p>
            <img src="img/careers/work-culture1.jpg" alt="culture1" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              dignissimos laudantium. Porro odio consequuntur quibusdam corrupti
              reprehenderit reiciendis, quae commodi impedit ut ipsum molestiae
              mollitia necessitatibus, quisquam adipisci labore nulla!
            </p>
            <img src="img/careers/work-culture2.jpg" alt="culture2" />
          </div>
          <div>
            <h3>Office Locations</h3>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>Los Angeles, The United States</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>San Francisco, The United States</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>Seoul, South Korea</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>Sao Paulo, Brazil</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>Mumbai, India</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapPin} />
              <span>Tokyo, Japan</span>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Careers;
