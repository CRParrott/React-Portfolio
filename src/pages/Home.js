import React from 'react';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <About />
      <Contact />
    </div>
  );
};

export default Home;