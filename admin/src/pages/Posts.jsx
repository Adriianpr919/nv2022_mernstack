import React from 'react';
import AddBlogs from '../components/AddBlogs';
import AllBlogs from '../components/AllBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Posts = () => {
  return (
    <>
      <div className="content">
        <div className="card mb-3">
          <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
          <div className="card-body position-relative">
            <div className="row">
              <div className="col-lg-8">
                <h3>
                  <code>
                    <i className="fa-solid fa-circle-info"></i> Tabla Blogs.
                  </code>
                </h3>
                <p className="mt-2">
                  Menu De Blogs <b>Administrador.</b>
                </p>
                <a className="btn btn-link ps-0 btn-sm" href="/posts" rel='noreferrer'>
                  <code className='badge rounded-pill badge-soft-dark' style={{ fontSize: "20px" }}>
                    <FontAwesomeIcon icon="fa-solid fa-repeat" /> Cargar La Página. <span className="fas fa-chevron-right ms-1 fs--2" style={{ fontSize: "20px" }} />
                  </code>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">
            <div className="row flex-between-end">
              <div className="col-auto align-self-center">
                <h5 className="mb-0" data-anchor="data-anchor">
                  Tabla Blogs.
                </h5>
              </div>
              <div className="col-auto ms-auto">
                <div className="nav nav-pills nav-pills-falcon flex-grow-1" role="tablist">
                  <button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-00e07a86-422f-486b-992e-fae4ad5b5543" type="button" role="tab" aria-controls="dom-00e07a86-422f-486b-992e-fae4ad5b5543" aria-selected="true" id="tab-dom-00e07a86-422f-486b-992e-fae4ad5b5543">
                    <i className="fa-solid fa-eye"></i> Blogs.
                  </button>
                  <button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-ea780399-1f52-41bc-8e2a-21f208cb67f1" type="button" role="tab" aria-controls="dom-ea780399-1f52-41bc-8e2a-21f208cb67f1" aria-selected="false" id="tab-dom-ea780399-1f52-41bc-8e2a-21f208cb67f1">
                    <i className="fa-solid fa-square-plus"></i> Blogs.
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="tab-content">
              <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-00e07a86-422f-486b-992e-fae4ad5b5543" id="dom-00e07a86-422f-486b-992e-fae4ad5b5543">
                <AllBlogs />
              </div>
              <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-ea780399-1f52-41bc-8e2a-21f208cb67f1" id="dom-ea780399-1f52-41bc-8e2a-21f208cb67f1">
                <AddBlogs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
