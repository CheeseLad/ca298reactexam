import { useState, useEffect } from "react";

function ViewAllProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllProducts = () => {
    return (
      <div className="container custom-box">
        <h1>All Products</h1>
        <div className="row">
          {data.map((product, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>€{product.price}</li>
                    <li className="list-group-item"><strong>Category: </strong>{product.category}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllProducts();
}

export default ViewAllProducts;