import React, { useState } from 'react';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, price: price, category: `http://127.0.0.1:8000/api/category/${category}/`})
      });

      if (response.ok) {
        setMessage('Product created successfully.');
        setName('');
        setPrice('');
        setCategory('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      setMessage('An error occurred while creating the product.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
        <h2>Create a New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Example: Bomber Jacket"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Example: 50.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Example: coat"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Product
          </button>
        </form>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CreateProduct;
