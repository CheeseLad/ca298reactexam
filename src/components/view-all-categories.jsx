import { useState, useEffect } from "react";

function ViewAllCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const displayAllCategories = () => {
    return (
      <div className="container custom-box">
        <h1>All Categories</h1>
        <div className="row">
          {data.map((category, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.display_name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Shortcode: </strong>{category.shortcode}</li>
                  </ul>
                  <div className="button-container">
                    <a href={`/category/${category.shortcode}`} className="btn btn-primary mr-2">View Category Information</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return displayAllCategories();
}

export default ViewAllCategories;