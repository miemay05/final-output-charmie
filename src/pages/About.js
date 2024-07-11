import "./About.css";
import Navbar from "./Navbar";
import IMAGES from "./img/memetoga.png"

const About = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={IMAGES} alt="" />
            </div>
            <div className="slide-left col-lg-6">
              <h2 className="display-2 fw-bold text-black">About</h2>
              <p className="text-black">HELLO, I'M CHARMIE</p>
              <p className="text-black">"But you can call me Meme:)"</p>
              <a href="#work" className="btn btn-brand text-black">See My Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
