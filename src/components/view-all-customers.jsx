import { useState, useEffect } from "react";

function ViewAllCustomers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/customer/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllCustomers = () => {
    return (
      <div className="container custom-box">
        <h1>All Customers</h1>
        <div className="row">
          {data.map((customer, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{customer.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Email: </strong>{customer.email}</li>
                    <li className="list-group-item"><strong>Address: </strong>{customer.address}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllCustomers();
}

export default ViewAllCustomers;