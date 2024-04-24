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

  const displayAllOrderItems = () => {
    return (
      <div className="container custom-box">
        <h1>All Items In Order #{orderitems}</h1>
        <div className="row">
          {data.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{order.url}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Quantity: </strong>{order.quantity}</li>
                    <li className="list-group-item"><strong>Product: </strong>{order.product}</li>
                    <li className="list-group-item"><strong>Order: </strong>{order.order}</li>
                  </ul>
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