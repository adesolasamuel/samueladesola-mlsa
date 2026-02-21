/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Academic Curriculum Vitae",
    description:
      "A detailed overview of my academic journey, including my education, research, and professional experiences.",
    url: "https://drive.google.com/file/d/1gPgfdYu4f8OxBGo1eHgWgiIsT6fo3gz0/view?usp=sharing",
  },
  {
    title: "Roles Academy Youtube Channel",
    description:
      "Creating academic contents on my Youtube channel. The contents are focused on College Mathematics, Physics and Internet of Things",
    url: "https://www.youtube.com/@RolesAcademy",
  },
  {
    title: "Download Resume",
    description: "Download a copy of my Resume.",
    url: "https://drive.google.com/file/d/1MHjITfEJMUII2n7ID_VGbZYj4NsJPaXz/view?usp=sharing",
  },
  {
    title: "My GitHub Repository",
    description: "Contains various work I have done on Electronics and TinyML.",
    url: "https://github.com/adesolasamuel",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Quick Links</h2>
      <div className="sectionGrid">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
