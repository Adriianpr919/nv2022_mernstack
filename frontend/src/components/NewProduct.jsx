import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={product.image}
            className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail"
            alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">
              <span className='badge badge-info mb-2' style={{ fontSize: "15px" }}>
                {product.title}
              </span>
            </h5>
          </div>
          <ul className="list-group list-group-light list-group-small">
            <li className="list-group-item px-4">
              <span className='badge badge-danger mb-2' style={{ fontSize: "15px" }}>
                {product.subcategory}
              </span>
            </li>
            <li className="list-group-item px-4">
              <span>
                <em>
                  <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                    $ {(product.price).toFixed(2)} - COP
                  </b>
                </em>
              </span>
            </li>
            <li style={{ color: "black", fontSize: "20px" }} className="list-group-item px-4 badge badge-warning mb-2">
              {product.star}
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default NewProduct;