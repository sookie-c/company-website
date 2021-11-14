import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faNetworkWired,
  faLaptopMedical,
  faTools,
  faShieldVirus,
  faFolderOpen,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';
import styles from './home.module.css';

class Home extends Component {
  alertLink = () => {
    alert('(demo: important thing would be linked here)');
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <div className={styles.main}>
          <h5 className={styles.tinyTitle}>Technology Specialist</h5>
          <h1 className={styles.mainTitle}>
            Creating a One Stop Shop for your Telco and IT needs
          </h1>
          <h4 className={styles.mainDescription}>
            Creating a One Stop SHop for your Telco and IT needs One Solution is
            your Premium Telstra Enterprise and Business Partner, and
            specialises in designing solutions to suit your business objectives
          </h4>
          <button className={styles.serviceBtn} onClick={this.alertLink}>
            Services
          </button>
        </div>
        <div className={styles.description}>
          <img
            className={styles.descriptionImg}
            src="img/laptop.jpg"
            alt="description"
          />
          <div className={styles.text}>
            <h2>The best way to work together on a task</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ea vitae odio, repudiandae a suscipit odit cumque totam saepe,
              dolorum quis, placeat consequatur voluptas. Ratione veritatis
              exercitationem dolor labore rem. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Veritatis, aspernatur rerum,
              laboriosam eos veniam repellendus vitae delectus, facilis earum
              natus reiciendis repudiandae ea! Nostrum et ducimus sapiente
              pariatur aliquam odio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at,
              atque consequatur facilis nam labore ab quidem quasi quas fugit,
              harum nulla eos voluptas excepturi delectus omnis! Obcaecati,
              animi quo.
            </p>
          </div>
        </div>
        <div className={styles.specialisation}>
          <h1 className={styles.specialTitle}>We Specialise In</h1>
          <div className={styles.specialItems}>
            <div className={styles.specialItem}>
              <img
                className={styles.specialIcon}
                src="img/specialisation/business-solution.png"
                alt="business solution"
              />
              <div>Business Solution</div>
            </div>
            <div className={styles.specialItem}>
              <img
                className={styles.specialIcon}
                src="img/specialisation/mobile-system.png"
                alt="mobile system"
              />
              <div>Phone & Mobile System</div>
            </div>
            <div className={styles.specialItem}>
              <img
                className={styles.specialIcon}
                src="img/specialisation/it-service.png"
                alt="it service"
              />
              <div>Monaged IT Services</div>
            </div>
            <div className={styles.specialItem}>
              <img
                className={styles.specialIcon}
                src="img/specialisation/telecommunication.png"
                alt="telecommunication"
              />
              <div>Telecommunication</div>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <FontAwesomeIcon className={styles.serviceIcon} icon={faDesktop} />
            <h3>Server Administration</h3>
            <p>Managing and monitoring the performance on a file systems</p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon
              className={styles.serviceIcon}
              icon={faNetworkWired}
            />
            <h3>Network Services</h3>
            <p>
              Provided by dedicated LAN administration personnel either onsite
              or remotely
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon
              className={styles.serviceIcon}
              icon={faLaptopMedical}
            />
            <h3>Disaster Recovery</h3>
            <p>
              Business continuity strategy is the development of a detailed
              Disaster Recovery Plan
            </p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon className={styles.serviceIcon} icon={faTools} />
            <h3>Network Maintenance</h3>
            <p>Manage the performance and availability the LAN and WAN</p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon
              className={styles.serviceIcon}
              icon={faShieldVirus}
            />
            <h3>Virus Support</h3>
            <p>Experts who can work with you to diagnose and remove viruses</p>
          </div>
          <div className={styles.service}>
            <FontAwesomeIcon
              className={styles.serviceIcon}
              icon={faFolderOpen}
            />
            <h3>Transition Services</h3>
            <p>Manage the seamless crossover and control for IT services</p>
          </div>
        </div>
        <div className={styles.information}>
          <h3>NEED MORE INFORMATION</h3>
          <h2>Contact us to enquire about your IT solution today</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            quasi veniam maxime modi illum delectus deleniti libero, atque,
            omnis at accusamus, adipisci consequuntur nesciunt eius nostrum
            iusto incidunt. Eos, impedit!
          </p>

          <Link to="/contact">
            <li className={styles.menuItem}>
              <button className={styles.contactBtn}>Contact Us</button>
            </li>
          </Link>
        </div>
        <div className={styles.news}>
          <div className={styles.newsDescription}>
            <h1>News from Our Company</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem laboriosam magni quae sunt exercitationem deserunt
              consequuntur optio, iure sequi delectus ad vero quo eveniet
              mollitia nesciunt est nulla molestias magnam?
            </p>
          </div>

          <div className={styles.newsContainer}>
            <div className={styles.quantifiable}>
              <FontAwesomeIcon className={styles.newsIcon} icon={faTrophy} />
              <h2>39%</h2>
              <h3>Increase in sales</h3>
            </div>
            <div className={styles.quantifiable}>
              <FontAwesomeIcon className={styles.newsIcon} icon={faTrophy} />
              <h2>99%</h2>
              <h3>Customer satisfaction</h3>
            </div>
            <div className={styles.quantifiable}>
              <FontAwesomeIcon className={styles.newsIcon} icon={faTrophy} />
              <h2>10,000</h2>
              <h3>Customers</h3>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
