
import './App.css';
import Header from './components/Header';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';

function App() {
  return (
    <div className="App">

    <Router>
    <Header />
      <Routes>
        <Route path="/" caseSensitive={false} element={<ProductListing />} />
        <Route path="/product/:productId" caseSensitive={false} element={<ProductDetails />} />
        <Route >404 page found</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
