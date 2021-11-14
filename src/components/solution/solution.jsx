import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faNetworkWired,
  faLaptopMedical,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';
import styles from './solution.module.css';

class Solution extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <div className={styles.solution}>
          <div className={styles.itSolution}>
            <h1 className={styles.itTitle}>IT SOLUTION</h1>
            <div>
              <p className={styles.solutionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi incidunt optio id, ullam rerum natus blanditiis amet,
                obcaecati sunt officiis sed atque hic laudantium magni totam
                veniam aliquam! Officia, molestias.
              </p>
              <img
                className={styles.solutionImg}
                src="img/solution.jpg"
                alt="solution"
              />
            </div>
          </div>
          <div className={styles.process}>
            <h2 className={styles.processTitle}>The Process</h2>
            <div className={styles.processContainer}>
              <div className={styles.processes}>
                <FontAwesomeIcon
                  className={styles.processIcon}
                  icon={faDesktop}
                />
                <h4>IT Solutions</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  quis, doloribus alias ut aliquam distinctio delectus quasi
                  doloremque eaque dignissimos ullam laudantium culpa obcaecati
                  reiciendis sint adipisci, provident aperiam iste.
                </p>
              </div>
              <div className={styles.processes}>
                <FontAwesomeIcon
                  className={styles.processIcon}
                  icon={faNetworkWired}
                />
                <h4>IP & UNIFIED COMMUNICATIONS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  id soluta quae explicabo eum ducimus quis hic nisi obcaecati
                  harum corporis, delectus perspiciatis aspernatur enim iusto
                  itaque esse! Voluptate, delectus.
                </p>
              </div>
              <div className={styles.processes}>
                <FontAwesomeIcon
                  className={styles.processIcon}
                  icon={faLaptopMedical}
                />
                <h4>SERVICE & REPAIRS</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus dignissimos quibusdam quis voluptatibus sint impedit
                  doloribus, alias repudiandae esse optio soluta reprehenderit
                  amet, consectetur cupiditate repellat aut recusandae
                  distinctio voluptatum!
                </p>
              </div>
            </div>
            <div className={styles.processBottom}>
              <h2>Big or small we're ready to work with you!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente fuga beatae natus exercitationem libero eos soluta, ut
                non labore. Laborum expedita dicta cum eius optio voluptates
                earum, consequatur ad dolorem.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Solution;
