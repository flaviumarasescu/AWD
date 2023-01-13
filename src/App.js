import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Toolbar from './components/toolbar';
import SideDrawer from './components/sidemenu/SideDrawer';
import BackDrop from './components/backdrop/BackDrop';
import Contact from './pages/contact';
import About from './pages/about';
import WebDev from './pages/webDev';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  return (
    <div className="App">
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer
        backDropClickHandler={backDropClickHandler}
        show={sideDrawerOpen}
      />
      {sideDrawerOpen ? <BackDrop click={backDropClickHandler} /> : null}
      <main>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/web-development'} element={<WebDev />} />
        </Routes>
      </main>
      <footer className="content-footer">
        <p>Say hi to me on these social networks:</p>
        <ul className="social">
          <li>
            <a className="css-is-deranged" href="#">
              GitHub
            </a>
          </li>
          <li>
            <a className="css-is-deranged" href="#">
              Twitter
            </a>
          </li>
          <li>
            <a className="css-is-deranged" href="#">
              Google+
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
