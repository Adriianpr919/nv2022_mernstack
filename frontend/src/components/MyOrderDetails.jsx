import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderDetails = ({ item }) => {
  return (
    <main>
      <Link to={`/product/${item._id}`}>
      <div className="card" style={{ width: '18rem' }}>
          <img
            src={`${item.image}`}
            className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
            alt={item.title} />
          <hr />
          <div className="card-body">
            <h5 className="card-title">
              <span className='badge badge-info mb-2' style={{ fontSize: "15px" }}>
                {item.title}
              </span>
            </h5>
          </div>
          <ul className="list-group list-group-light list-group-small">
            <li className="list-group-item px-4">
              <span className='badge badge-danger mb-2' style={{ fontSize: "15px" }}>
                {item.subcategory}
              </span>
            </li>
            <li className="list-group-item px-4">
              <div className="npc-footerSubDivTop badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                <span className="npc-size">{item.size}</span>
              </div>
            </li>
            <li className="list-group-item px-4">
              <div className="npc-footerSubDivTop badge badge-secondary mb-2" style={{ fontSize: "20px" }}>
                <span className="npc-color">{item.color}</span>
              </div>
            </li>
            <li className="list-group-item px-4">
              <span>
                <em>
                  <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                    $ {(item.price)?.toFixed(2)} - COP
                  </b>
                </em>
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </main>
  );
};

export default MyOrderDetails;