import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SignIn from '../components/SignIn';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <>
      <Header />
      <SignIn />
      <Logo />
      <Footer />
    </>
  );
};

export default Login;