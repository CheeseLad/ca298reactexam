import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ViewSingleOrder() {
  const [data, setData] = useState([]);
  const { order } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/order/${order}/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [order]);

  const displayOrder = () => {
    return (
      <div className="container custom-box single-box">
        <h1>Order Information</h1>
        <div className="row">
          <div className="col-md6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{data.url}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date Ordered: </strong>{data.date_ordered}</li>
                    <li className="list-group-item"><strong>Shipping Address: </strong>{data.shipping_addr}</li>
                    <li className="list-group-item"><strong>Status: </strong>{data.status}</li>
                    <li className="list-group-item"><strong>Customer: </strong>{data.customer}</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    )};

  return displayOrder();
}

export default ViewSingleOrder;