import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewAllCategories from './components/view-all-categories';
import ViewAllCustomers from './components/view-all-customers';
import ViewAllProducts from './components/view-all-products';
import CreateCategory from './components/create-category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div>
          <App />
          </div>
        } />
        <Route path="/categories" element={
        <div>
          <ViewAllCategories />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/customers" element={
        <div>
          <ViewAllCustomers />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/products" element={
        <div>
          <ViewAllProducts />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
        <Route path="/create-category" element={ 
        <div>
          <CreateCategory />
          <a href="/" className="btn btn-primary create-button">Return Home</a>
        </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
