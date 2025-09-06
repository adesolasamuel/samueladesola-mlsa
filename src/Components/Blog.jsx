import React from "react";
import Footer from "./Footer"; // Import Footer component

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

const Blog = () => {
  return (
    <div id="main">
      <div className="content">
        <section className="light" id="blog">
          <h2>Blog</h2>
          <p>Hello Welcome to my blog! More posts coming soon.</p>
        </section>
      </div>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default Blog;
