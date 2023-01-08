import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Toolbar from './components/toolbar';
import SideDrawer from './components/sidemenu/SideDrawer';
import BackDrop from './components/backdrop/BackDrop';
import Contact from './pages/contact';

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
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <BackDrop click={backDropClickHandler} /> : null}
      <main>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
