import React from "react";
import "./styles/contact.css";
import Navbar from "../components/Navbar";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section id="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          {/* Left contact page */}
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>
            <input
              className="form-control message"
              placeholder="MESSAGE"
              name="message"
              required
            />
            <button
              className="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i>
                <span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          {/* Right contact page */}
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">City, State</span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      hitmeup@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <AiFillGithub className="fa fa-github" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <AiFillLinkedin className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <AiFillTwitterCircle className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <AiFillInstagram className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
