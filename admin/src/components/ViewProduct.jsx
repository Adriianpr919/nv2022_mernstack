import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewProduct = ({ product, setOpenViewProduct }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 style={{ textAlign: "justify", color: "black" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> {product.title}
              </h3>
              <div className="close-form" onClick={() => setOpenViewProduct(false)}>X</div>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Categoría. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.category}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  SubCategoría. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.subcategory}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Descripción. :*
                </label>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {product.description}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Precio - COP. :*
                </label>
                <p className="description badge rounded-pill badge-soft-success" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  $ {(product.price)?.toFixed(2)} - COP
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Clasificación ⭐. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  {product.star}
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Talla 📏. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.sizes?.map((item) => (
                      <span className="item">
                        {item.value}
                      </span>
                    ))}
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Color De Oro y Color De Piedra 🖌️. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    {product.colors?.map((item) => (
                      <span className="item">
                        {item.value}
                      </span>
                    ))}
                  </div>
                </p>
              </p>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <label htmlFor="title" style={{ textAlign: "justify", color: "black", fontSize: "15px" }} className="badge rounded-pill badge-soft-dark">
                  Imagenes 📸. :*
                </label>
                <p className="description badge rounded-pill badge-soft-info" style={{ textAlign: "justify", color: "black", fontSize: "15px" }}>
                  <div className="popup-images">
                    <img src={product.image} alt={product.title} />
                    <img src={product.imageOne} alt={product.title} />
                  </div>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
