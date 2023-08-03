import React from "react";
import Navbar from "../components/Navbar";
import "./styles/home.css";
import frame from "../assets/unsplash_87gLIFoj79c.png";
import img1 from "../assets/unsplash_ZHvM3XIOHoE.png";
import img2 from "../assets/img1.png";
import img3 from "../assets/img2.png";
import img4 from "../assets/img3.png";
import { Link } from "react-router-dom";
import { path } from "../Router/router";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="home">
          <div className="container">
            <section>
              <header>
                <div className="homeSectionIntro">
                  <div className="homeSectionText">
                    <h1 className="welcomeText">
                      Welcome to Chatter: A Haven for Text-Based Content
                    </h1>
                    <h2 className="subText">
                      Unleash the Power of Words, Connect with Like-minded
                      Readers and Writers
                    </h2>
                  </div>
                  <Link to={path.REGISTER}>
                    <button className="homeSectionButtonContainer">
                      <div className="get-started">Get Started</div>
                    </button>
                  </Link>
                </div>
              </header>
            </section>
          </div>
        </div>

        <section>
          <div className="aboutSectionIntro">
            <div className="aboutSectionContain">
              <div className="aboutSectionText">
                <h1 className="aboutText">About Chatter</h1>
                <p className="aboutSubText">
                  Chatter is a multi-functional platform where authors and
                  readers can have access to their own content. It aims to be a
                  traditional bookworm’s heaven and a blog to get access to more
                  text based content. Our vision is to foster an inclusive and
                  vibrant community where diversity is celebrated. We encourage
                  open-mindedness and respect for all individuals, regardless of
                  their backgrounds or beliefs. By promoting dialogue and
                  understanding, we strive{" "}
                </p>
              </div>
            </div>
            <img src={frame} className="aboutImg" alt="about" />
          </div>
        </section>

        <section>
          <div className="featureSection">
            <div className="featureSectionContain">
              <div className="featureSectionText">
                <h1 className="featureText">Why you should join Chatter</h1>
                <p className="featureSubText">
                  Our goal is to make writers and readers see our platform as
                  their next heaven for blogging, ensuring ease in interactions,
                  connecting with like-minded peers, have access to favorite
                  content based on interests and able to communicate your great
                  ideas with people
                </p>
              </div>
              <div className="featureSectionBoxes">
                <div className="featureBox">
                  <div className="ellipse"></div>
                  <h2 className="featureBoxText">Analysis</h2>
                  <p className="featureBoxSubText">
                    Analytics to track the number of views, likes and comment
                    and also analyze the performance of your articles over a
                    period of time
                  </p>
                </div>
                <div className="featureBox">
                  <div className="ellipse"></div>
                  <h2 className="featureBoxText">Social interaction</h2>
                  <p className="featureBoxSubText">
                    Users on the platform can interact with posts they like,
                    comment and engage in discussions
                  </p>
                </div>
                <div className="featureBox">
                  <div className="ellipse"></div>
                  <h2 className="featureBoxText">Content creation</h2>
                  <p className="featureBoxSubText">
                    Write nice and appealing with our in-built markdown, a rich
                    text editor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="joinSection">
            <div className="joinSectionContain">
              <div className="joinSectionText">
                <p className="joinSubText">
                  "Chatter has become an integral part of my online experience.
                  As a user of this incredible blogging platform, I have
                  discovered a vibrant community of individuals who are
                  passionate about sharing their ideas and engaging in
                  thoughtful discussions.”
                </p>
              </div>
              <h1 className="nameText">
                <span className="name">Adebolola Muhydeen, </span>
                <span className="title">Software developer at apple</span>
              </h1>
              <button className="joinSectionButtonContainer">
                <div className="join">Join Chatter</div>
              </button>
            </div>
            <div className="joinSectionImg">
              <img className="img" src={img1} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="getStartedSection">
            <div className="getStartedInfo">
              <div className="frame-38">
                <div className="mask-group">
                  <img className="rounded-1" src={img2} alt="" />
                </div>
                <div className="mask-group">
                  <img className="rounded-2" src={img3} alt="" />
                </div>
              </div>

              <div className="mask-group">
                <img className="rounded-3" src={img4} alt="" />
              </div>
            </div>

            <div className="frame-24">
              <div className="frame-23">
                <div className="getStartedText">
                  Write, read and connect with great minds on chatter
                </div>

                <div className="getStartedSubText">
                  Share people your great ideas, and also read write-ups based
                  on your interests. connect with people of same interests and
                  goals
                </div>
              </div>

              <Link to={path.REGISTER}>
                <div className="getStartedButtonContainer">
                  <div className="get-started">Get started</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <footer className="homeFooter">
          <div className="footer-container">
            <div className="footerTable">
              <div className="footerLogo">
                <div className="footerLogoText">CHATTER</div>
              </div>
              <ul>
                <li className="footerliHeader">Explore</li>
                <li>Community</li>
                <li>Trending Blog</li>
                <li>Chatting for terms</li>
              </ul>
              <ul>
                <li className="footerliHeader">Support</li>
                <li>Support docs</li>
                <li>join slack</li>
                <li>contact us</li>
              </ul>
              <ul>
                <li className="footerliHeader">Official blog</li>
                <li>official blog</li>
                <li>Engineering blog</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
