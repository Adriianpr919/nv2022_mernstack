import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeBlog from '../components/HomeBlog';
import Intro from '../components/Intro';
import NewProducts from '../components/NewProducts';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <HomeBlog />
      <NewProducts />
      <Logo />
      <Footer />
    </>
  );
};

export default Home;