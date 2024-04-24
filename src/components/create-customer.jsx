import React, { useState } from 'react';

const CreateCustomer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email, address: address })
      });

      if (response.ok) {
        setMessage('Customer created successfully.');
        setName('');
        setEmail('');
        setAddress('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating customer:', error);
      setMessage('An error occurred while creating the customer.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
        <h2>Create a New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Example: John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Example: jsmith@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Example: 123 Fake Street"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Customer
          </button>
        </form>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CreateCustomer;
