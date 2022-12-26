import { Link } from "react-router-dom";
import React from "react";
import SimpleSlider from "../SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [hamState, setHamState] = React.useState(false);

  function toggleHam() {
    setHamState((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="main-wrapper">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="nav-logo">
            <img src="images/logo.png" alt="logo" className="nav-logo" />
          </Link>
          {window.innerWidth <= 820 ? (
            <img
              src={hamState ? "images/close.svg" : "images/hamburger.png"}
              className="ham"
              onClick={toggleHam}
              alt=""
            />
          ) : (
            <ul>
              <li>
                <a href="#Services">
                  Services
                  <img src="images/services-icon.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#About">
                  About <img src="images/info-icon.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#Contact">
                  Contact
                  <img src="images/contact-icon.svg" alt="" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      {hamState ? (
        <div className="modal">
          <ul>
            <li>
              <a href="#Services" onClick={toggleHam}>
                Services
                <img src="images/services-icon.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#About" onClick={toggleHam}>
                About <img src="images/info-icon.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={toggleHam}>
                Contact
                <img src="images/contact-icon.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="right-wrapper">
        <section className="hero-section">
          <div className="hero-container">
            <h1>Digital Marketing Done Right</h1>
            <img
              src="images/marketing.svg"
              alt="marketing"
              className="hero-img"
            />
          </div>
          <img
            src={
              window.innerWidth <= 820
                ? "images/arrow-m.gif"
                : "images/mousescroll.gif"
            }
            className="mousescroll"
            alt=""
          />
        </section>
        <section className="info-section" id="Services">
          <img src="images/teamwork.svg" alt="teamwork" />
          <div className="info-div">
            <h1>Leave your marketing to us</h1>
            <p>
              Your oline presence is our priority. We always strive to put your
              business out in the most professional and effective way possible.
              Our team of dedicated and passionate agents are on the job 24/7
              working towards taking your digital marketing to the next level
            </p>
          </div>
        </section>
        <section className="caro">
          <SimpleSlider />
        </section>

        <footer id="Contact">
          <div className="footer-right">
            <img src="images/logo.png" alt="" />
            <ul>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#About">About us</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/Terms&Conditions">Terms And Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="social-div">
            <img
              src="images/icon-facebook.svg"
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
              alt=""
            />
            <img
              src="images/icon-instagram.svg"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
              alt=""
            />
            <img
              src="images/icon-twitter.svg"
              onClick={() => window.open("https://www.twitter.com/", "_blank")}
              alt=""
            />
            <img
              src="images/icon-pinterest.svg"
              onClick={() =>
                window.open("https://www.pinterest.com/", "_blank")
              }
              alt=""
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
