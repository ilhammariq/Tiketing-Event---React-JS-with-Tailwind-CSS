import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/home/Footer';
import Dropdown from './components/home/Dropdown';
import Navbar from "./components/home/Navbar";
import Detail from "./pages/Detail";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Home />
            <Footer />
          </Route>
          <Route path='/detail/:id' exact>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
