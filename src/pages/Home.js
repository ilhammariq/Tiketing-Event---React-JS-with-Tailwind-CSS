import React from 'react';
import About from '../components/home/About';
import Content from '../components/content/Content';
import Hero from '../components/home/Hero';
import UseScrollanchor from '../helpers/UseScrollanchor';

const Home = () => {
  UseScrollanchor();
  return (
    <>
      <Hero />
      <Content />
      <About />
    </>
  );
};

export default Home;
