import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [star, setStar] = useState('');
  const [sizes, setSizes] = useState([{ value: '', key: '' }]);
  const [colors, setColors] = useState([{ value: '', key: '' }]);
  const [image, setImage] = useState('');
  const [imageOne, setImageOne] = useState('');

  //for sizes add fields
  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const addSizeFields = () => {
    setSizes([...sizes, { value: '', key: '' }]);
  }

  const removeSizeFields = (i) => {
    const newSizeValues = [...sizes];
    newSizeValues.splice(i, 1);
    setSizes(newSizeValues);
  }

  //for colors add fields
  const handleChangeColor = (e, i) => {
    e.preventDefault();
    const clonedColors = [...colors];
    clonedColors[`${i}`] = { value: e.target.value, key: i };
    setColors(clonedColors);
  };

  const addColorFields = () => {
    setColors([...colors, { value: '', key: '' }]);
  }

  const removeColorFields = (i) => {
    const newColorValues = [...colors];
    newColorValues.splice(i, 1);
    setColors(newColorValues);
  }


  const addProductHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post('/api/products/add', {

        title,
        category,
        subcategory,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imageOne

      });

      console.log(data);
      toast.success('¡.Ha Agregado Con Éxito Un Nuevo Producto.!');
      setTitle('');
      setCategory('');
      setSubcategory('');
      setDescription('');
      setPrice('');
      setStar('');
      setSizes([{ value: '', key: '' }]);
      setColors([{ value: '', key: '' }]);
      setImage('');
      setImageOne('');


    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Producto.!');

    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> Producto Recientes.
              </h3>
              <p className="mt-2">
                <hr />
                <form onSubmit={addProductHandler}>
                  <div>
                    <label htmlFor="title">
                      TITULO. :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title' required />
                      <label htmlFor="title">
                        TITULO. :*
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
                              CATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setCategory(e.target.value)} value={category} id='cat' required />
                              <label htmlFor="cat">
                                CATEGORÍA. :*
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
                              SUBCATEGORÍA. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setSubcategory(e.target.value)} value={subcategory} id='scat' required />
                              <label htmlFor="scat">
                                SUBCATEGORÍA. :*
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
                              PRECIO. :*
                            </label>
                            <div className="form-floating mb-3">
                              <input className="form-control is-valid" type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price' required />
                              <label htmlFor="price">
                                PRECIO. :*
                              </label>
                            </div>
                          </p>
                        </div>
                      </div>
                    </fieldset>
                    <hr />
                    <label htmlFor="desc">
                      DESCRIPCIÓN. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="desc" cols="50" rows="50" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 150, textAlign: "justify" }} />
                      <label htmlFor="desc">
                        DESCRIPCIÓN. :*
                      </label>
                    </div>
                    <label htmlFor="star">
                      CLASIFICACIÓN ⭐ . :*
                    </label>
                    <div className="form-floating mb-3">
                      <input className="form-control is-valid" type="text" onChange={(e) => setStar(e.target.value)} value={star} id='star' required />
                      <label htmlFor="star">
                        CLASIFICACIÓN ⭐ . :*
                      </label>
                    </div>
                    <hr />
                    <div className="container">
                      <div className="panel panel-default">
                        <div className="panel-heading">OPCION 1 LA TALLA 📏. :*</div>
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
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="size">
                                        LA TALLA 📏 . :*
                                      </label>
                                      {sizes.map((element, i) => (
                                        <div className='d-flexAdd form-floating mb-3' key={i}>
                                          <input key={element.i} className="form-control is-valid" type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, element.i)} value={sizes[`${i}`]?.value || ''} id='size' required />
                                          <label htmlFor="size">
                                            LA TALLA 📏 . :*
                                          </label>
                                          {
                                            i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeSizeFields(i)}>
                                              <FontAwesomeIcon icon={faTrash} />
                                            </button> : null
                                          }
                                        </div>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addSizeFields()}>
                                        <i className="fa-solid fa-square-plus"></i> Agregue Campo.
                                      </button>
                                    </div>
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
                        <div className="panel-heading">OPCION 2 EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️ . :*</div>
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
                                  <div className="form-group">
                                    <div className="form-groupValues">
                                      <label htmlFor="color">
                                        EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️ . :*
                                      </label>
                                      {colors.map((element, i) => (
                                        <div className='d-flexAdd form-floating mb-3' key={i}>
                                          <input key={element.i} className="form-control is-valid" type="text" name='colors' onChange={(e) => handleChangeColor(e, i, element.i)} value={colors[`${i}`]?.value || ''} id='color' required />
                                          <label htmlFor="color">
                                            EL COLOR DE ORO Y COLOR DE PIEDRA 🖌️ . :*
                                          </label>
                                          {
                                            i ? <button type='button' className='btn-remove btn btn-outline-danger me-1 mb-1' onClick={() => removeColorFields(i)}>
                                              <FontAwesomeIcon icon={faTrash} />
                                            </button> : null
                                          }
                                        </div>
                                      ))}
                                    </div>
                                    <div className="form-groupAdd">
                                      <button type='button' className='btn-add btn btn-outline-success me-1 mb-1' onClick={() => addColorFields()}>
                                        <i className="fa-solid fa-square-plus"></i> Agregue Campo.
                                      </button>
                                    </div>
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
                    <div className="form-floating mb-3">
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
                                      IMAGEN 1 📸 . :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control is-valid" type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image' required />
                                      <label htmlFor="image">
                                        IMAGEN 1 📸 . :*
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
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
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
                                      IMAGEN 2 📸 . :*
                                    </label>
                                    <div className="form-floating mb-3">
                                      <input className="form-control is-valid" type="text" onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne' required />
                                      <label htmlFor="imageOne">
                                        IMAGEN 2 📸 . :*
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
                    </div>
                    <hr />
                  </div >
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faPlus} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Agregar.
                  </button>
                </form >
              </p >
            </div >
          </div >
        </div >
      </div >
    </>
  );
};

export default AddProducts;
