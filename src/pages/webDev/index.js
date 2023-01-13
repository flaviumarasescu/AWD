import React from 'react';

import './style.scss';
import github from '../../assets/github-tile.svg';
import node from '../../assets/nodejs-icon.svg';
// import postgresql from '../../assets/postgresql-icon.svg';
import react from '../../assets/reactjs-icon.svg';
import typescrip from '../../assets/typescriptlang-icon.svg';

const WebDev = () => {
  return (
    <>
      <header className="">
        <h1 className="">Web Development</h1>
      </header>
      <div>
        <section className="questions-section">
          <h2>Installing basic software</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet.
          </p>
          <h2>HTML basics</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
          </p>
          <h2>CSS basics</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
          </p>
          <h2>JavaScript basics</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat scelerisque elit sit amet consequat. Aliquam erat
            volutpat. Aliquam venenatis gravida nisl sit amet facilisis. Nullam
            cursus fermentum velit sed laoreet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum consequat scelerisque elit
            sit amet consequat. Aliquam erat volutpat. Aliquam venenatis gravida
            nisl sit amet facilisis. Nullam cursus fermentum velit sed laoreet.
          </p>
        </section>
        <section class="testimonial">
          <article class="row">
            <span class="row-content">
              <span class="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat scelerisque elit sit amet consequat.
                  Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet
                  facilisis. Nullam cursus fermentum velit sed laoreet.
                </p>

                <img src={react} alt="react" />
                <h3>React</h3>
              </span>
              <span className="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat scelerisque elit sit amet consequat.
                  Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet
                  facilisis. Nullam cursus fermentum velit sed laoreet.
                </p>

                <img src={node} alt="node" />
                <h3>Node</h3>
              </span>
              <span className="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat scelerisque elit sit amet consequat.
                  Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet
                  facilisis. Nullam cursus fermentum velit sed laoreet.
                </p>

                <img src={typescrip} alt="typescript" />
                <h3>Typescript</h3>
              </span>

              <span class="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat scelerisque elit sit amet consequat.
                  Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet
                  facilisis. Nullam cursus fermentum velit sed laoreet.
                </p>

                <img src={github} alt="github" />
                <h3>Github</h3>
              </span>

              <span class="testimonial-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat scelerisque elit sit amet consequat.
                  Aliquam erat volutpat. Aliquam venenatis gravida nisl sit amet
                  facilisis. Nullam cursus fermentum velit sed laoreet.
                </p>

                <img src={react} alt="react2" />
                <h3>React</h3>
              </span>
            </span>
          </article>
        </section>
      </div>
    </>
  );
};

export default WebDev;
