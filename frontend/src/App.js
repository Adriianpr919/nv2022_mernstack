import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutInfo from './pages/AboutInfo';
import FaqInfo from './pages/FaqInfo';
import Location from './pages/Location';
import OptionsOne from './pages/OptionsOne';
import OptionsTwo from './pages/OptionsTwo';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Wish from './pages/Wish';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Blog from './pages/Blog';
import BlogItem from './components/BlogItem';
import Product from './pages/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './pages/Order';

function App() {
  return (
    <>
      <ToastContainer position='bottom-center' limit={1} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutInfo />} />
          <Route path='/faq' element={<FaqInfo />} />
          <Route path='/location' element={<Location />} />
          <Route path='/options1' element={<OptionsOne />} />
          <Route path='/options2' element={<OptionsTwo />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/wish' element={<Wish />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:id' element={<BlogItem />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/order/:id' element={<Order />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
