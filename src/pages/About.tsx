import React from "react";
import "./styles/about.css";
import frame from "../assets/unsplash_87gLIFoj79c.png";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="aboutSectionIntro">
          <div className="aboutSectionContain">
            <div className="aboutSectionText">
              <h1 className="aboutText">About Chatter</h1>
              <p className="aboutSubText">
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm’s heaven and a blog to get access to more
                text-based content. Our vision is to foster an inclusive and
                vibrant community where diversity is celebrated. We encourage
                open-mindedness and respect for all individuals, regardless of
                their backgrounds or beliefs. By promoting dialogue and
                understanding, we strive to create an environment that enriches
                the reading experience and allows for meaningful interactions
                between authors and readers.
              </p>
              <p className="aboutSubText">
                With Chatter, authors can showcase their literary works, share
                their thoughts, and engage with their readers through comments
                and discussions. Readers can explore a wide range of genres,
                discover new authors, and participate in book clubs or writing
                communities. The platform also offers features such as
                personalized reading recommendations, bookmarking, and offline
                reading, ensuring a seamless and convenient reading experience.
              </p>
              <p className="aboutSubText">
                Join Chatter today and become part of a thriving community of
                book lovers, writers, and avid readers. Whether you're
                passionate about fiction, non-fiction, poetry, or any other form
                of written expression, Chatter has something for everyone.
                Immerse yourself in captivating stories, engage in
                thought-provoking discussions, and unleash your creativity in a
                welcoming and supportive environment.
              </p>
            </div>
          </div>
          <img src={frame} className="aboutImg" alt="about" />
        </div>
      </section>
    </div>
  );
};

export default About;
