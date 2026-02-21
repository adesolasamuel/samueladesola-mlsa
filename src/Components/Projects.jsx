/**
 * Projects component
 *
 * Showcases technical projects with demo previews.
 */

import React from "react";
import perezDemo from "../images/perez_demo.gif";

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
        <div className="projectCard">
          <a
            href="https://github.com/adesolasamuel/perez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={perezDemo} alt="Perez ROS2 robot demo" className="projectGif" />
          </a>
          <h3>Perez — ROS2 Four Wheel Differential Drive Robot</h3>
          <p className="small">
            A four-wheel differential drive robot built with ROS2, featuring autonomous
            navigation, sensor integration, and real-time control for robotics research
            and development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
