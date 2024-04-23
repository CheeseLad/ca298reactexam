import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleProduct() {
  const [data, setData] = useState([]);
  const { product } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/${product}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [product]);

  const displayProduct = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Product Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>€{data.price}</li>
                    <li className="list-group-item"><strong>Category: </strong><a href="{product.category}">{data.category}</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    )};

  return displayProduct();
}

export default ViewSingleProduct;