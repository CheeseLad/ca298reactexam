import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewAllCategories from './components/view-all-categories';
import ViewSingleCategory from './components/view-single-category';
import ViewAllCustomers from './components/view-all-customers';
import ViewSingleCustomer from './components/view-single-customer';
import ViewAllProducts from './components/view-all-products';
import ViewSingleProduct from './components/view-single-product';
import ViewAllProductsCategory from './components/view-all-products-category';
import ViewAllOrders from './components/view-all-orders';
import ViewSingleOrder from './components/view-single-order';
import CreateCategory from './components/create-category';
import CreateProduct from './components/create-product';
import CreateCustomer from './components/create-customer';
import CreateOrder from './components/create-order';
import CreateOrderItems from './components/create-order-items';
import ViewOrderItems from './components/view-order-items';

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
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/category/:category" element={
        <div>
          <ViewSingleCategory />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/customers" element={
        <div>
          <ViewAllCustomers />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/customer/:customer" element={
        <div>
          <ViewSingleCustomer />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/products" element={
        <div>
          <ViewAllProducts />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/product/:product" element={
        <div>
          <ViewSingleProduct />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/productcategory/:productcategory" element={
        <div>
          <ViewAllProductsCategory />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/orders" element={
        <div>
          <ViewAllOrders />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/order/:order" element={
        <div>
          <ViewSingleOrder />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/orderitems/:orderitems" element={
        <div>
          <ViewOrderItems />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/create-category" element={ 
        <div>
          <CreateCategory />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/create-product" element={
        <div>
          <CreateProduct />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/create-customer" element={
        <div>
          <CreateCustomer />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/create-order" element={
        <div>
          <CreateOrder />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
        </div>
        } />
        <Route path="/create-order-items" element={
        <div>
          <CreateOrderItems />
          <Link to="/" className="btn btn-primary create-button">Return Home</Link>
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
