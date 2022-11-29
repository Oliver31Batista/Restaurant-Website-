import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
    <div id="home" className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
          convallis mauris, at convallis lectus vulputate ut. Sed non ante
          laoreet, efficitur ipsum ac, sollicitudin lorem. Cras in turpis ac
          velit mollis elementum quis at risus.
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
);

export default Header;
