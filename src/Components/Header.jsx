/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";
  return (
    <div className="header">
      <input type="checkbox" id="menuToggle" />
      <div>
        <Link to={"/"} className="logo">
          SA
        </Link>
        <div className="navLinks">
          <Link to="/">Home</Link>
          {!isBlogPage && <a href="#about">About</a>}
          {!isBlogPage && <a href="#portfolio">Portfolio</a>}
          {!isBlogPage && <Link to="blog">Blog</Link>}
          <a href="#footer">Contact</a>
        </div>
        <label className="menuIcon" htmlFor="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
