

function App() {
  return (
    <div className="home-page">
      <h1>Shop System - CA298 Exam</h1>
      <h2><i>Created by Jake Farrell - 22349856</i></h2>
        <a href="/categories" className="btn btn-primary create-button">View All Categories</a>
        <a href="/customers" className="btn btn-primary create-button">View All Customers</a>
        <a href="/products" className="btn btn-primary create-button">View All Products</a>
        <a href="/orders" className="btn btn-primary create-button">View All Orders</a>
        <a href="/create-category" className="btn btn-primary create-button">Create New Category</a>
        <a href="/create-product" className="btn btn-primary create-button">Create New Product</a>
        <a href="/create-customer" className="btn btn-primary create-button">Create New Customer</a>
        <a href="/create-order" className="btn btn-primary create-button">Create New Order</a>
        <a href="/create-order-items" className="btn btn-primary create-button">Add Item To Order</a>
    </div>
  );
}

export default App;
