import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';

const AllProduct = ({ product }) => {

  const [openViewProduct, setOpenViewProduct] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);

  const handlerDeleteProduct = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.delete(`/api/products/delete/${product._id}`);

      if (data) {
        toast.success('¡.Producto Eliminado Con Éxito.!');
      }

    } catch (err) {
      toast.error('¡.Producto no eliminado.!');
    }

  }

  return (
    <>
      <table className="table table-sm mb-0 overflow-hidden data-table fs--1" data-options="{&quot;responsive&quot;:false,&quot;pagingType&quot;:&quot;simple&quot;,&quot;lengthChange&quot;:false,&quot;searching&quot;:false,&quot;pageLength&quot;:8,&quot;language&quot;:{&quot;info&quot;:&quot;_START_ to _END_ Items of _TOTAL_&quot;}}" key={product._id}>
        <thead className="bg-200 text-900">
          <tr>
            <th className="sort pe-1 align-middle white-space-nowrap">
              <span className="badge rounded-pill badge-soft-primary" style={{ fontSize: "15px" }}>PRODUCTO.</span>
            </th>
            <th className="no-sort pe-1 align-middle data-table-row-action" />
          </tr>
        </thead>
        <tbody className="list" id="table-simple-pagination-body">
          <tr className="btn-reveal-trigger">
            <th className="align-middle white-space-nowrap">
              <span className="badge rounded-pill badge-soft-secondary" style={{ fontSize: "15px" }}>{product.title}</span>
            </th>
            <td className="align-middle white-space-nowrap text-end">
              <div className="dropstart font-sans-serif position-static d-inline-block">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal float-end badge rounded-pill badge-soft-dark" type="button"
                  id="dropdown-simple-pagination-table-item-0" data-bs-toggle="dropdown" data-boundary="window"
                  aria-haspopup="true" aria-expanded="false" data-bs-reference="parent">
                  <span className="fas fa-ellipsis-h fs--1" />
                </button>
                <div className="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-simple-pagination-table-item-0">
                  <span className="badge badge rounded-pill badge-soft-secondary text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faEye} onClick={() => setOpenViewProduct(true)} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                  <div className="dropdown-divider" />
                  <span className="badge badge rounded-pill badge-soft-success text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEditProduct(true)} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                  <div className="dropdown-divider" />
                  <span className="badge badge rounded-pill badge-soft-danger text-center" style={{ fontSize: "15px", textAlign: "justify" }}>
                    <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteProduct} /> <FontAwesomeIcon icon="fa-solid fa-hand-point-left" /> PRESIONA EL ICONO.
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {openViewProduct && <ViewProduct product={product} setOpenViewProduct={setOpenViewProduct} />}
      {openEditProduct && <EditProduct product={product} setOpenEditProduct={setOpenEditProduct} />}
    </>
  );
};

export default AllProduct;
