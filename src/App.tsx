import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { StoreProvider } from './context/StoreContext';

export interface Film {
  id: number;
  title: string;
  price: number;
  image: string;
}

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
