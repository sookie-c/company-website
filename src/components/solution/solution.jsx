import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faNetworkWired,
  faLaptopMedical,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer/footer';

class Solution extends Component {
  render() {
    return (
      <>
        <div>
          <h1>IT SOLUTION</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              incidunt optio id, ullam rerum natus blanditiis amet, obcaecati
              sunt officiis sed atque hic laudantium magni totam veniam aliquam!
              Officia, molestias.
            </p>
            <img src="img/solution.jpg" alt="solution" />
          </div>
        </div>

        <h2>The Process</h2>
        <div>
          <FontAwesomeIcon icon={faDesktop} />
          <h4>IT Solutions</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis,
            doloribus alias ut aliquam distinctio delectus quasi doloremque
            eaque dignissimos ullam laudantium culpa obcaecati reiciendis sint
            adipisci, provident aperiam iste.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNetworkWired} />
          <h4>IP & UNIFIED COMMUNICATIONS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
            soluta quae explicabo eum ducimus quis hic nisi obcaecati harum
            corporis, delectus perspiciatis aspernatur enim iusto itaque esse!
            Voluptate, delectus.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptopMedical} />
          <h4>SERVICE & REPAIRS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            dignissimos quibusdam quis voluptatibus sint impedit doloribus,
            alias repudiandae esse optio soluta reprehenderit amet, consectetur
            cupiditate repellat aut recusandae distinctio voluptatum!
          </p>
        </div>
        <div>
          <h2>Big or small we're ready to work with you!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            fuga beatae natus exercitationem libero eos soluta, ut non labore.
            Laborum expedita dicta cum eius optio voluptates earum, consequatur
            ad dolorem.
          </p>
        </div>
        <Footer />
      </>
    );
  }
}

export default Solution;
