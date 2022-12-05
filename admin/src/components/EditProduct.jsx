import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditProduct = ({ product, setOpenEditProduct }) => {

  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [subCategory, setSubCategory] = useState(product.subcategory);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [star, setStar] = useState(product.star);
  const [sizes, setSizes] = useState(product.sizes);
  const [colors, setColors] = useState(product.colors);
  const [image, setImage] = useState(product.image);
  const [imageOne, setImageOne] = useState(product.imageOne);

  const editProductHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.put("/api/products/update", {
        _id: product._id,
        title,
        category,
        subCategory,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imageOne
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Producto.!");
      setOpenEditProduct(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
    }
  }

  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const handleChangeColor = (e, i) => {
    e.preventDefault();
    const clonedColors = [...colors];
    clonedColors[`${i}`] = { value: e.target.value, key: i };
    setColors(clonedColors);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Producto. - {product.title}
              </h3>
              <div className="close-form" onClick={() => setOpenEditProduct(false)}>X</div>
              <p className="mt-2">
                <hr />
                <form onSubmit={editProductHandler}>
                  <div>
                    <label htmlFor="title">
                      CAMBIAR TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        CAMBIAR TITULO. :*
                      </label>
                    </div>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="cat">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Hombres), (Mujeres), (Niños y Niñas)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="cat">
                              CAMBIAR CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setCategory(e.target.value)} value={category} id='cat' required />
                              <label htmlFor="cat">
                                CAMBIAR CATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="scat">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <i className="fa-solid fa-filter"></i> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(Nuevos) y (Destacados)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="scat">
                              CAMBIAR SUBCATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setSubCategory(e.target.value)} value={subCategory} id='scat' required />
                              <label htmlFor="scat">
                                CAMBIAR SUBCATEGORÍA. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <fieldset>
                      <legend style={{ textAlign: "justify" }}>
                        <label htmlFor="price">
                          <span className="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" /> AVISO IMPORTANTE. :*
                          </span>
                        </label> -
                        POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN PUNTO SEQUIDO (.)"</code></b></span>.
                      </legend>
                      <div className="panel panel-default">
                        <div className="panel-body">
                          <p>
                            <label htmlFor="price">
                              CAMBIAR PRECIO. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price' required />
                              <label htmlFor="price">
                                CAMBIAR PRECIO. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <label htmlFor="desc">
                      CAMBIAR DESCRIPCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="desc" cols="50" rows="50" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        CAMBIAR DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <label htmlFor="star">
                      CAMBIAR CLASIFICACIÓN ⭐ . :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setStar(e.target.value)} value={star} id='star' required />
                      <label htmlFor="star">
                        CAMBIAR CLASIFICACIÓN ⭐ . :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">CAMBIAR LA TALLA 📏. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN MINÚSCULA CON ACENTO AGUDO Y SIN MAYÚSCULA CON TILDE (á, é, í, ñ, ó y ú)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="title">
                                    CAMBIAR LA TALLA 📏 . :*
                                  </label>
                                  <div className="form-floating mb-3">
                                    {
                                      product.sizes?.map((item, i) => (
                                        <input className="form-control is-valid" key={item.i} type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, item.i)} value={sizes[`${i}`]?.value || ''} id='size' />
                                      ))
                                    }
                                    <label htmlFor="title">
                                      CAMBIAR LA TALLA 📏 . :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">CAMBIAR EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️. :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <FontAwesomeIcon icon="fa-solid fa-gear" /> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"SIN MINÚSCULA CON ACENTO AGUDO, SIN MAYÚSCULA CON TILDE Y SIN PUNTO SEQUIDO (á, é, í, ñ, ó, ú y .)"</code></b></span>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="title">
                                    CAMBIAR EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️ . :*
                                  </label>
                                  <div className="form-floating mb-3">
                                    {
                                      product.colors?.map((item, i) => (
                                        <input className="form-control is-valid" key={item.i} type="text" name='colors' onChange={(e) => handleChangeColor(e, i, item.i)} value={colors[`${i}`]?.value || ''} id='color' />
                                      ))
                                    }
                                    <label htmlFor="title">
                                      CAMBIAR EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️ . :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">OPCION 1 📸 . :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="image">
                                    CAMBIAR IMAGEN 1 📸 . :*
                                  </label>
                                  <div className="form-floating mb-3">
                                    <input className="form-control is-valid" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
                                    <label htmlFor="image">
                                      CAMBIAR IMAGEN 1 📸 . :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">OPCION 2 📸 . :*</div>
                        <div className="panel-body">
                          <fieldset className="col-md-12">
                            <legend style={{ textAlign: "justify" }}>
                              <label htmlFor="image">
                                <span class="badge rounded-pill badge-soft-warning" style={{ fontSize: "15px" }}>
                                  <i className='fas fa-camera-retro'></i> AVISO IMPORTANTE. :*
                                </span>
                              </label> -
                              POR FAVOR TIENES QUE ESCRIBIR ASI <span><b><code className='badge rounded-pill badge-soft-danger' style={{ fontSize: "15px" }}>"(.png) y (.jpg)"</code></b></span> Sin Mayuscula con Solo El Link De Enlace Con URL <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{ fontSize: "15px" }} /> <a className='badge rounded-pill badge-soft-secondary' style={{ fontSize: "15px" }} href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-globe" style={{ fontSize: "15px", color: "blue" }} /> Haz Clic Aquí.
                              </a>.
                            </legend>
                            <div className="panel panel-default">
                              <div className="panel-body">
                                <p>
                                  <label htmlFor="imageOne">
                                    CAMBIAR IMAGEN 2 📸 . :*
                                  </label>
                                  <div className="form-floating mb-3">
                                    <input className="form-control is-valid" type="text" onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne' required />
                                    <label htmlFor="imageOne">
                                      CAMBIAR IMAGEN 2 📸 . :*
                                    </label>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </fieldset>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Actualizar Cambios.
                  </button>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
