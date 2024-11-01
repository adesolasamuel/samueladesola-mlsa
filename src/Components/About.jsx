/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Mechatronics and Systems Engineering Student at Abubakar Tafawa Balewa University. I am passioante about Embedded Systems and Internet of Things. I am also a Microsoft Learn Student Ambassador and a Microsoft Certified Trainer.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Embedded Systems",
  "Internet of Things",
  "Circuit Design",
  "Microcontrollers",
  "Robotics Operating Systems (ROS)",
  "C/C++",
  "Python",
  "Cloud Computing",
  "RTOS",
  "ML/AI",
  "TinyML",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. I am interested in embedding software into hardware.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-content">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="detail-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
