import React, { useState } from 'react';

const CreateOrderItems = () => {
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('');
  const [order, setOrder] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/orderitem/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quantity: quantity, product: `http://127.0.0.1:8000/api/product/${product}/`, order: `http://127.0.0.1:8000/api/order/${order}/`})
      });

      if (response.ok) {
        setMessage('Item added successfully.');
        setQuantity('');
        setProduct('');
        setOrder('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      setMessage('An error occurred while adding the item.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
        <h2>Add Item To Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              placeholder="Example: 2"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product">Product:</label>
            <input 
              type="text"
              className="form-control"
              id="product"
              placeholder="Example: 1"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="order">Order:</label>
            <input 
              type="text"
              className="form-control"
              id="order"
              placeholder="Example: 1"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Item To Order
          </button>
        </form>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CreateOrderItems;
