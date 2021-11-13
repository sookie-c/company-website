import React, { Component } from 'react';
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

class Home extends Component {
  render() {
    return (
      <>
        <div className="main">
          <h5>Technology Specialist</h5>
          <h1>Creating a One Stop Shop for your Telco and IT needs</h1>
          <h4>
            Creating a One Stop SHop for your Telco and IT needs One Solution is
            your Premium Telstra Enterprise and Business Partner, and
            specialises in designing solutions to suit your business objectives
          </h4>
          <button>SERVICES</button>
        </div>
        <div className="description">
          <img src="img/laptop.jpg" alt="description image" />
          <div>
            <h2>The best way to work together on a task</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              ea vitae odio, repudiandae a suscipit odit cumque totam saepe,
              dolorum quis, placeat consequatur voluptas. Ratione veritatis
              exercitationem dolor labore rem.
            </p>
          </div>
        </div>
        <div className="specialisation">
          <h2>We Specialise In</h2>
          <ul>
            <li>
              <img
                src="img/specialisation/business-solution.png"
                alt="business solution"
              />
              <span>Business Solution</span>
            </li>
            <li>
              <img
                src="img/specialisation/mobile-system.png"
                alt="mobile system"
              />
              <span>Phone & Mobile System</span>
            </li>
            <li>
              <img src="img/specialisation/it-service.png" alt="it service" />
              <span>Monaged IT Services</span>
            </li>
            <li>
              <img
                src="img/specialisation/telecommunication.png"
                alt="telecommunication"
              />
              <span>Telecommunication</span>
            </li>
          </ul>
        </div>
        <div className="services">
          <div className="service">
            <FontAwesomeIcon icon={faDesktop} />
            <h3>Server Administration</h3>
            <p>Managing and monitoring the performance on a file systems</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faNetworkWired} />
            <h3>Network Services</h3>
            <p>
              Provided by dedicated LAN administration personnel either onsite
              or remotely
            </p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faLaptopMedical} />
            <h3>Disaster Recovery</h3>
            <p>
              Business continuity strategy is the development of a detailed
              Disaster Recovery Plan
            </p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faTools} />
            <h3>Network Maintenance</h3>
            <p>Manage the performance and availability the LAN and WAN</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faShieldVirus} />
            <h3>Virus Support</h3>
            <p>Experts who can work with you to diagnose and remove viruses</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faFolderOpen} />
            <h3>Transition Services</h3>
            <p>Manage the seamless crossover and control for IT services</p>
          </div>
        </div>
        <div className="information">
          <h3>NEED MORE INFORMATION</h3>
          <h2>Contact us to enquire about your IT solution today</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            quasi veniam maxime modi illum delectus deleniti libero, atque,
            omnis at accusamus, adipisci consequuntur nesciunt eius nostrum
            iusto incidunt. Eos, impedit!
          </p>
          <button>CONTACT US</button>
        </div>
        <div className="news">
          <h1>News from Our Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            laboriosam magni quae sunt exercitationem deserunt consequuntur
            optio, iure sequi delectus ad vero quo eveniet mollitia nesciunt est
            nulla molestias magnam?
          </p>
          <div className="quantifiable">
            <FontAwesomeIcon icon={faTrophy} />
            <h2>39%</h2>
            <h3>Increase in sales</h3>
          </div>
          <div className="quantifiable">
            <FontAwesomeIcon icon={faTrophy} />
            <h2>99%</h2>
            <h3>Customer satisfaction</h3>
          </div>
          <div className="quantifiable">
            <FontAwesomeIcon icon={faTrophy} />
            <h2>10,000</h2>
            <h3>Customers</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
