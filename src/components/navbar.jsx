import React from "react";
import "./navbar.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        {/* first logo part */}
        <div className="logo">
          <h2>
            <span>M</span>y First
            <span> P</span>roject
          </h2>
        </div>
        {/* 2nd manu part*/}
        <div className="manuelink">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Serves</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="soeial-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaFacebook className="facebook" color="blue" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaInstagram className="instagram" color="orange" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaYoutube className="youtube" color="red" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* this is our hero section */}
      <section className="hero-section">
        <p>Well Come to</p>
        <h1>Our Website</h1>
      </section>
    </div>
  );
};

export default navbar;
