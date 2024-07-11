import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/memecal.png";
import ontoy1Image from "./img/PORTFOLIO.png";
import ontoy2Image from "./img/dfd1.png";
import jao5Image from "./img/33deb509-0cf6-44bd-803a-ff7acef1361a.JPG";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="meme">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Portfolio
              </h1>
              <div id="portfolio">
                <div className="container">
                  <div className="row mt-5">
                    <h3> My Projects:</h3>
                    <hr />
                    <div className="col">
                      <img className="one" src={calcuImage2} alt="Calculator" />
                      <h4 className="mt-5">Calculator</h4>
                    </div>
                    <div className="col">
                      <img className="three" src={ontoy2Image} alt="System Integrations" />
                      <h4 className="mt-5">System Integrations</h4>
                    </div>
                    <div className="col">
                      <img className="four" src={jao5Image} alt="Capstone Project" />
                      <h4 className="mt-5">Capstone Project</h4>
                    </div>
                    <div className="col">
                      <img className="two" src={ontoy1Image} alt="My React Js" />
                      <h4 className="mt-5">My React Js</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
