import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewBlog = ({ setOpenView, blog }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3 className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> {blog.title}
              </h3>
              <div className="close-form" onClick={() => setOpenView(false)}>X</div>
              <p className="mt-2" style={{ textAlign: "justify" }}>
                <hr />
                <h3 style={{ textAlign: "justify", color: "black" }}>
                  <span className="badge rounded-pill badge-soft-secondary" style={{ textAlign: "justify", color: "black", fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-eye" /> Descripción. :*
                  </span>
                </h3>
                <p className="description" style={{ textAlign: "justify", color: "black" }}>
                  {blog.description}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
