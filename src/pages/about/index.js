import React from 'react';

import './style.scss';
import aboutImg from '../../assets/about-image-1920.jpg';
import aboutImg460 from '../../assets/about-image-640.jpg';

const About = () => {
  return (
    <div>
      <header className="masthead">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={aboutImg460}
            sizes="640px"
          />
          <source srcSet={aboutImg} sizes="1920px" />

          <img alt="profile picture" src={aboutImg} />
        </picture>
        <p className="masthead-intro">Hi I'm</p>
        <h1 className="masthead-heading">Flaviu!</h1>
      </header>
      <div className="body__wrapper">
        <section className="introduction-section">
          <h1>Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra. Donec ultricies vestibulum libero
            vitae scelerisque. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam egestas semper urna ut viverra. Donec
            ultricies vestibulum libero vitae scelerisque. Sed vitae ante quis
            velit placerat maximus vitae vel sapien. Vestibulum vehicula cursus
            elit, nec mattis dolor fringilla sed. Fusce imperdiet id est sit
            amet congue. Pellentesque sagittis erat vitae ante congue, eu
            malesuada purus molestie. Integer vestibulum quam ligula, sit amet
            malesuada nibh congue nec. Ut ut cursus arcu. Vivamus et luctus
            arcu. Donec euismod luctus mollis. Morbi congue mi augue, sed
            hendrerit quam consequat a. In vel viverra
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra.
          </p>
        </section>
        <section className="location-section">
          <h1>Where I'm From</h1>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra.
          </p>
        </section>
        <section className="questions-section">
          <h1>More About Me</h1>
          <h2>My hobbies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra.
          </p>
          <h2>My skills</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra.
          </p>
          <h2>My Education</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
