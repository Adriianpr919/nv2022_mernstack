import React from 'react';
import CartItems from '../components/CartItems';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../components/Logo';

const Cart = () => {
  return (
    <>
      <Header />
      <CartItems />
      <Logo />
      <Footer />
    </>
  );
};

export default Cart;