import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Users from './Users';
import Posts from './Posts';
import Login from './Login';
import Footer from './Footer';
import HomePage from './HomePage';
import MenuNavbar from './MenuNavbar';

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <main className="main" id="top">
          <div className="container" data-layout="container">
            <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand-lg">
              <MenuNavbar />
              <SideBar />
              <TopBar />
            </nav>
            <div className="content">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/users' element={<Users />} />
                <Route path='/posts' element={<Posts />} />
              </Routes>
              <HomePage />
              <Footer />
            </div>
          </div>
        </main>
      </Router>
    </>
  );
};

export default Home;