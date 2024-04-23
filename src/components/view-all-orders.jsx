import { useState, useEffect } from "react";

function ViewAllOrders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/order/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllOrders = () => {
    return (
      <div className="container custom-box">
        <h1>All Orders</h1>
        <div className="row">
          {data.map((order, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{order.url}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date Ordered: </strong>{order.date_ordered}</li>
                    <li className="list-group-item"><strong>Shipping Address: </strong>{order.shipping_addr}</li>
                    <li className="list-group-item"><strong>Status: </strong>{order.status}</li>
                    <li className="list-group-item"><strong>Customer: </strong>{order.customer}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllOrders();
}

export default ViewAllOrders;