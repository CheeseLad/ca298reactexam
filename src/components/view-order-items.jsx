import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewOrderItems() {
  const [data, setData] = useState([]);
  const { orderitems } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orderitem/?order=${orderitems}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [orderitems]);

  const getIDFromUrl = (id) => {
    if (!id) return "";
    const segments = id.split("/");
    return segments[segments.length - 2];
  };

  const displayAllOrderItems = () => {
    return (
      <div className="container custom-box">
        <h1>All Items In Order #{orderitems}</h1>
        <div className="row">
          {data.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Item #{getIDFromUrl(order.url)}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Quantity: </strong>{order.quantity}</li>
                  </ul>
                  <div className="button-container">
                    <a href={`/product/${getIDFromUrl(order.product)}`} className="btn btn-primary mr-2">View Product Information</a>
                    <a href={`/order/${getIDFromUrl(order.order)}`} className="btn btn-primary mr-2">View Order Information</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllOrderItems();
}

export default ViewOrderItems;