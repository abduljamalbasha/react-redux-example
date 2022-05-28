
import './App.css';
import React, { Suspense } from 'react';
import Header from './components/Header';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorFallback from './components/ErrorBoundry';
import { ErrorBoundary } from 'react-error-boundary';
const ProductListing = React.lazy(()=>import('./components/ProductListing'))
const ProductDetails = React.lazy(()=> import('./components/ProductDetail'))

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
      <Suspense fallback={<div>Loading produuct please wait....</div>}>
          <Router>
          
            <Routes>
              <Route path="/" caseSensitive={false} element={<ProductListing />} />
              <Route path="/product/:productId" caseSensitive={false} element={<ProductDetails />} />
              <Route >404 page found</Route>
            </Routes>
          </Router>
      </Suspense>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
