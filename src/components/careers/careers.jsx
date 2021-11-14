import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';
import styles from './careers.module.css';

class Careers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  alertApply = () => {
    alert('apply link would be here');
  };

  render() {
    return (
      <div className={styles.careers}>
        <div className={styles.career}>
          <div>
            <h1 className={styles.careersTitle}>Careers</h1>
            <h4>
              Dolor quaerat non ad? Mollitia, quis eligendi quasi nam,
              consectetur dolore temporibus, nisi exercitationem iure
              necessitatibus accusamus harum quam et.
            </h4>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nam
              assumenda totam perspiciatis, rem optio repellendus quas, quasi
              fuga dolore, harum nobis enim eligendi. Animi magnam dicta sunt
              dolores voluptates.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              beatae quis minus amet id sit expedita molestias ipsum suscipit?
            </p>
            <button className={styles.applyBtn} onClick={this.alertApply}>
              APPLY NOW
            </button>
          </div>
        </div>
        <div className={styles.cityBackground}></div>
        <div className={styles.culture}>
          <h2 className={styles.cultureTitle}>Culture at Company</h2>
          <div className={styles.cultureContainer}>
            <p className={styles.cultureText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              dignissimos laudantium. Porro odio consequuntur quibusdam corrupti
              reprehenderit reiciendis, quae commodi impedit ut ipsum molestiae
              mollitia necessitatibus, quisquam adipisci labore nulla!
            </p>
            <img
              className={styles.cultureImg}
              src="img/careers/work-culture1.jpg"
              alt="culture1"
            />
          </div>
          <div className={styles.cultureContainer}>
            <p className={styles.cultureText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              dignissimos laudantium. Porro odio consequuntur quibusdam corrupti
              reprehenderit reiciendis, quae commodi impedit ut ipsum molestiae
              mollitia necessitatibus, quisquam adipisci labore nulla!
            </p>
            <img
              className={styles.cultureImg}
              src="img/careers/work-culture2.jpg"
              alt="culture2"
            />
          </div>
          <div className={styles.locations}>
            <h2 className={styles.locationTitle}>Office Locations</h2>
            <div className={styles.locationContainer}>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>Los Angeles, USA</span>
                </div>
              </div>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>San Francisco, USA</span>
                </div>
              </div>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>Seoul, South Korea</span>
                </div>
              </div>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>Sao Paulo, Brazil</span>
                </div>
              </div>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>Mumbai, India</span>
                </div>
              </div>
              <div className={styles.location}>
                <img
                  className={styles.locationImg}
                  src="img/location.jpg"
                  alt="location"
                />
                <div className={styles.locationName}>
                  <FontAwesomeIcon
                    className={styles.locationIcon}
                    icon={faMapPin}
                  />
                  <span>Tokyo, Japan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Careers;
