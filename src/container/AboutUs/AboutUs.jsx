import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div>
    <div
      id="about"
      className="app__aboutus app__bg flex__center section__padding"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about us spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra convallis mauris, at convallis lectus vulputate ut. Sed non
            ante laoreet, efficitur ipsum ac, sollicitudin lorem. Cras in turpis
            ac velit mollis elementum quis at risus. Integer ut libero ac sapien
            lacinia accumsan ultricies ac mauris.
          </p>
          <button className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about us spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pharetra convallis mauris, at convallis lectus vulputate ut. Sed non
            ante laoreet, efficitur ipsum ac, sollicitudin lorem. Cras in turpis
            ac velit mollis elementum quis at risus. Integer ut libero ac sapien
            lacinia accumsan ultricies ac mauris.
          </p>
          <button className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
