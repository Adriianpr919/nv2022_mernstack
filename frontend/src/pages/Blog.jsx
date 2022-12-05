import React from 'react';
import BlogLists from '../components/BlogLists';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';

const Blog = () => {
  return (
    <>
      <Header />
      <BlogLists />
      <Logo />
      <Footer />
    </>
  );
};

export default Blog;