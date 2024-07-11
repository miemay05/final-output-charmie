import "./Experience.css";
import Navbar from "./Navbar";
import PC1Image from "./img/OJT1.jpg"
import PC2Image from "./img/OJT2.jpeg"
import PC3Image from "./img/OJT3.jpg"
import PC4Image from "./img/OJT4.jpg"
import PC5Image from "./img/OJT5.jpeg"
import PC6Image from "./img/OJT6.jpeg"
import PC7Image from "./img/OJT7.jpg"
import PC8Image from "./img/OJT8.jpeg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="meme">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
              <div className="exp">
                <div className="container">
                  <hr />
                  <div className="row mb-5">
                    <h3 className="text-center">just a picture</h3>
                    <hr />
                    <div className="col-lg-4">
                    <img src={PC1Image} alt="" />
                    <img src={PC2Image} alt="" />
                      <h4 className="three text-black">ONE</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC3Image} alt="" />
                    <img src={PC4Image} alt="" />
                      <h4 className="three text-black">TWO</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC5Image} alt="" />
                    <img src={PC6Image} alt="" />
                      <h4 className="three text-black">THREE</h4>
                    </div>
                    <div className="col-lg-4">
                    <img src={PC7Image} alt="" />
                    <img src={PC8Image} alt="" />
                      <h4 className="three text-black">FOUR</h4>
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

export default Experience;
