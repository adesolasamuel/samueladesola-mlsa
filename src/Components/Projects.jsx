/**
 * Projects component
 *
 * Showcases technical projects with demo previews.
 */

import React from "react";
import perezDemo from "../images/perez_demo.gif";
import se3Demo from "../images/SE3-Demo.gif";

const projectList = [
  {
    title: "Perez - ROS2 Four Wheel Differential Drive Robot",
    summary:
      "A four-wheel differential drive robot built with ROS2, featuring autonomous navigation, sensor integration, and real-time control for robotics research and development.",
    url: "https://github.com/adesolasamuel/perez",
    image: perezDemo,
    imageAlt: "Perez ROS2 robot demo",
  },
  {
    title: "SE3 Robot Motions - Translation and Rotation",
    summary:
      "A simulator for robot translation and Rotation in the Special Ortogonal Group SE(3)",
    url: "https://github.com/adesolasamuel/Robot-Motion-SE-3-",
    image: se3Demo,
    imageAlt: "SE3 robot motions demo",
  },
];

const Projects = () => {
  return (
    <section className="padding" id="projects">
      <h2 style={{ textAlign: "center" }}>Selected Projects</h2>
      <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <a
          href="https://github.com/adesolasamuel"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4E567E", fontWeight: 600 }}
        >
          View more on GitHub &rarr;
        </a>
      </p>
      <div className="projectShowcase">
        {projectList.map((project) => (
          <div className="projectCard" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.imageAlt} className="projectGif" />
            </a>
            <h3>{project.title}</h3>
            <p className="small">{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
