import './App.css';
import Navbar from './components/Navbar/navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/loginPopup';
import Cart from './pages/Cart/cart';
import PlaceOrder from './pages/PlaceOrder/placeOrder'

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LoginPopup setShowLogin = {setShowLogin}/>}
      <div className="app">
        <Navbar setShowLogin = {setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
