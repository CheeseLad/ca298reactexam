import React, { useState } from 'react';

const CreateOrder = () => {
  const [shipping_addr, setShippingAddr] = useState('');
  const [status, setStatus] = useState('');
  const [customer, setCustomer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shipping_addr: shipping_addr, status: status, customer: `http://127.0.0.1:8000/api/customer/${customer}/`})
      });

      if (response.ok) {
        setMessage('Order created successfully.');
        setShippingAddr('');
        setStatus('');
        setCustomer('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating order:', error);
      setMessage('An error occurred while creating the order.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
        <h2>Create a New Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="shipping_addr">Shipping Address:</label>
            <input
              type="text"
              className="form-control"
              id="shipping_addr"
              placeholder="Example: 3187 Myra Street"
              value={shipping_addr}
              onChange={(e) => setShippingAddr(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
          name="status"
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="O">ORDERED</option>
          <option value="P">PROCESSING</option>
          <option value="S">SHIPPED</option>
          <option value="D">DELIVERED</option>
        </select>
          </div>
          <div className="form-group">
            <label htmlFor="customer">Customer:</label>
            <input
              type="number"
              className="form-control"
              id="customer"
              placeholder="Example: 1"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Order
          </button>
        </form>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CreateOrder;
