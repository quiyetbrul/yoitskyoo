import React from "react";
import FadeIn from "react-fade-in";

const About = () => {
  return (
    <FadeIn>
      <div className="about-container" id="about" align="center">
        <h6>about me: minimalist. pragmatic.</h6>
        <p className="wow fadeInUp">
          i am passionate about creating excellent software that’ll help
          alleviate modern difficulties.
          <br />
          all of my work is produced locally from orange county, california.
          <br />
          let’s leave our footprints and be remembered.
        </p>
        <div className="whitespace" />
        <div className="whitespace" />
        <div className="whitespace" />
        <div className="whitespace" />
      </div>
    </FadeIn>
  );
};

export default About;
