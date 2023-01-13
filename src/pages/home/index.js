import React from 'react';

import '../../assets/avatar-1920.png';
import placeholder1280 from '../../assets/avatar-1280.png';
import placeholder640 from '../../assets/avatar-640.png';

import appleLogo1920 from '../../assets/apple-logo-1920.jpg';
import appleLogo640 from '../../assets/apple-logo-640.jpg';
import teslaLogo1920 from '../../assets/tesla-logo-1920.jpg';
import teslaLogo640 from '../../assets/tesla-logo-640.jpg';

import './style.scss';
import aboutImg460 from '../../assets/about-image-640.jpg';

const Home = () => {
  return (
    <div className="home-page__wrapper">
      <section className="home-page__info__wrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          egestas semper urna ut viverra. Donec ultricies vestibulum libero
          vitae scelerisque. Sed vitae ante quis velit placerat maximus vitae
          vel sapien. Vestibulum vehicula cursus elit, nec mattis dolor
          fringilla sed. Fusce imperdiet id est sit amet congue. Pellentesque
          sagittis erat vitae ante congue, eu malesuada purus molestie. Integer
          vestibulum quam ligula, sit amet malesuada nibh congue nec. Ut ut
          cursus arcu. Vivamus et luctus arcu. Donec euismod luctus mollis.
          Morbi congue mi augue, sed hendrerit quam consequat a. In vel viverra
          nibh. Donec aliquet lacinia nisi nec ultrices. Sed mattis sapien sed
          odio tempor pretium. Mauris vehicula non leo id fermentum. Sed erat
          ligula, placerat et consectetur vitae, ullamcorper vitae turpis.
          Phasellus dapibus sem in eleifend maximus. Proin sodales iaculis
          elementum. Nullam aliquam, lorem non malesuada laoreet, risus sem
          molestie mauris, a lobortis justo augue dapibus urna. Integer vitae
          libero non lectus efficitur dapibus eget vel erat. Nulla facilisi. In
          sed turpis urna. Etiam ut urna bibendum, laoreet sapien vel, hendrerit
          lacus. Duis sit amet efficitur tortor, non posuere turpis. Vivamus
          dictum, ligula euismod posuere tristique, lorem sapien lacinia risus,
          nec gravida ante lorem varius dui. Vivamus quis mattis eros, vitae
          hendrerit neque. Suspendisse potenti. Morbi rutrum leo tortor. Proin
          laoreet metus at libero fringilla, et volutpat tellus tincidunt.
          Aliquam augue neque, bibendum in porta sodales, tempor quis lacus.
          Suspendisse sit amet nibh dolor. Aliquam sed scelerisque turpis. Sed
          interdum, mi a gravida luctus, arcu mi auctor arcu, vel egestas libero
          risus id tortor. Vestibulum a velit ornare, vestibulum libero id,
          tincidunt orci. Donec auctor velit non risus volutpat, in pulvinar
          purus tristique. In efficitur consequat velit et fringilla.
        </p>
        <div className="profile-picture">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={placeholder640}
              sizes="640px"
            />
            <source srcSet={placeholder1280} sizes="1280px" />

            <img alt="profile picture" src={placeholder1280} />
          </picture>
        </div>
      </section>
      <section className="projects__wrapper">
        <h1 tabIndex="0" className="projects__title">
          Projects
        </h1>
        <div className="project">
          <h2 tabIndex="0">Tesla</h2>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={teslaLogo640}
                sizes="640px"
              />
              <source srcSet={teslaLogo1920} sizes="1920px" />

              <img alt="project image tesla" src={teslaLogo1920} />
            </picture>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra. Donec ultricies vestibulum libero
            vitae scelerisque. Sed vitae ante quis velit placerat maximus vitae
            vel sapien. Vestibulum vehicula cursus elit, nec mattis dolor
            fringilla sed. Fusce imperdiet id est sit amet congue. Pellentesque
            sagittis erat vitae ante congue, eu malesuada purus molestie.
            Integer vestibulum quam ligula, sit amet malesuada nibh congue nec.
            Ut ut cursus arcu. Vivamus et luctus arcu. Donec euismod luctus
            mollis. Morbi congue mi augue, sed hendrerit quam consequat a. In
          </p>
        </div>
        <div className="project">
          <h2 tabIndex="0">Apple</h2>
          <div className="project__image">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={appleLogo640}
                sizes="640px"
              />
              <source srcSet={appleLogo1920} sizes="1920px" />

              <img alt="project image apple" src={appleLogo1920} />
            </picture>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            egestas semper urna ut viverra. Donec ultricies vestibulum libero
            vitae scelerisque. Sed vitae ante quis velit placerat maximus vitae
            vel sapien. Vestibulum vehicula cursus elit, nec mattis dolor
            fringilla sed. Fusce imperdiet id est sit amet congue. Pellentesque
            sagittis erat vitae ante congue, eu malesuada purus molestie.
            Integer vestibulum quam ligula, sit amet malesuada nibh congue nec.
            Ut ut cursus arcu. Vivamus et luctus arcu. Donec euismod luctus
            mollis. Morbi congue mi augue, sed hendrerit quam consequat a. In
            vel viverra nibh. Donec aliquet lacinia nisi nec ultrices. Sed
            mattis sapien sed odio tempor pretium. Mauris vehicula non leo id f
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
