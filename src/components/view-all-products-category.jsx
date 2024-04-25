import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewAllProductsCategory() {
  const [data, setData] = useState([]);
  const { productcategory } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/?category=${productcategory}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [productcategory]);

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
                    <li className="list-group-item"><strong>Category: </strong><a href={`/category/${product.category.split('/').filter(part => !!part).pop()}`}>{product.category.split('/').filter(part => !!part).pop()}</a></li>
                  </ul>
                  <div className="button-container">
                    <a href={`/product/${product.url.split('/').filter(part => !!part).pop()}`} className="btn btn-primary mr-2">View Product Information</a>
                  </div>
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

export default ViewAllProductsCategory;