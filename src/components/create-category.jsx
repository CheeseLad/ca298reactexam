import React, { useState } from 'react';

const CreateCategory = () => {
  const [displayName, setDisplayName] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/category/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ display_name: displayName, shortcode: shortcode })
      });

      if (response.ok) {
        setMessage('Category created successfully.');
        setDisplayName('');
        setShortcode('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error creating category:', error);
      setMessage('An error occurred while creating the category.');
    }
  };

  return (
    <div>
      <div className="container custom-box single-box">
        <h2>Create a New Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="displayName">Display Name:</label>
            <input
              type="text"
              className="form-control"
              id="displayName"
              placeholder="Example: Coats"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shortcode">Shortcode:</label>
            <input
              type="text"
              className="form-control"
              id="shortcode"
              placeholder="Example: coat"
              value={shortcode}
              maxLength={5}
              onChange={(e) => setShortcode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Category
          </button>
        </form>
      
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default CreateCategory;
