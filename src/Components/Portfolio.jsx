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
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfoliopic.jpg";

const imageAltText = "desktop with books and laptop";

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
    url: "https://drive.google.com/file/d/1HaK7cV91SwZETy35INwU56j8XENZZChi/view?usp=sharing",
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
    url: "https://samueladesolamlsa.blob.core.windows.net/mlstuffs/Samuel Adesola Resume.pdf",
  },
  {
    title: "My hardware Projects Repository",
    description: "Contains various work I have done on Electronics and TinyML.",
    url: "https://github.com/adesolasamuel",
  },
  {
    title: "Academic Publications",
    description:
      "Contains various Papers I have presented and Researches I have done on Electronics and TinyML.",
    url: "https://scholar.google.com/citations?hl=en&user=sruE6z8AAAAJ",
  },
  {
    title: "My blogposts on IoT and Embedded Systems",
    description:
      "Collection of various blogposts I have written on Internet of Things and Embedded Systems.",
    url: "https://samueladesola.medium.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="portfolioWrapper">
        <div>
          <img src={image} alt={imageAltText} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
