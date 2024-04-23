

function App() {
  return (
    <div className="home-page">
      <h1>Shop System</h1>
      <h2><i>Created by Jake Farrell - 22349856</i></h2>
        <a href="/categories" className="btn btn-primary create-button">View All Categories</a>
        <a href="/customers" className="btn btn-primary create-button">View All Customers</a>
        <a href="/products" className="btn btn-primary create-button">View All Products</a>
        <a href="/create-category" className="btn btn-primary create-button">Create New Category</a>
    </div>
  );
}

export default App;
