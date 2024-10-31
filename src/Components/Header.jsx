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
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        flexWrap: "wrap",
      }}
    >
      <Link to="/">Home</Link>
      {!isBlogPage && <a href="#about">About</a>}
      {!isBlogPage && <a href="#portfolio">Portfolio</a>}
      {!isBlogPage && <Link to="blog">Blog</Link>}
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
