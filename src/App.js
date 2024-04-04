import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import { items } from './components/Data';
import { useState } from 'react';
import Search from './components/Search';
import Cart from './components/Cart';



function App() {
  const [data, setdata] = useState([...items])

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Router>
        <Nav setdata={setdata} cart={cart} />

        <Routes>

          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />} />

          <Route path='/prouduct/:id' element={<ProductDetails cart={cart} setCart={setCart}  />} />

          <Route path='/search/:term' element={<Search cart={cart} setCart={setCart}  />} />

          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
