/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Blog from "./Components/Blog"; // Import Blog component
import BlogPost from "./Components/BlogPost"; // Import BlogPost component
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Samuel Adesola",
  title: "Embedded Systems and Internet of Things Engineer",
  email: "samuel.adesola@studentambassadors.com",
  gitHub: "adesolasamuel",
  instagram: "adesola8011",
  linkedIn: "samuel-adesola/",
  medium: "samueladesola",
  twitter: "AdesolaSamuel18",
  youTube: "@RolesAcademy",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <Router>
      <div id="main">
        <Header />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home name={siteProps.name} title={siteProps.title} />
                  <About />
                  <Portfolio />
                  <Footer
                    {...siteProps}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                  />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <Blog
                  siteProps={siteProps}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              }
            />
            <Route
              path="/blog/:id"
              element={<BlogPost />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
