import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddBlogs = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const addBlogHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.post('/api/blogs/add', {

        title,
        description

      });

      console.log(data);
      toast.success('¡.Has Añadido Correctamente Un Nuevo Blog.!');
      setTitle('');
      setDescription('');


    } catch (err) {

      toast.error('¡.Error Al Agregar Nuevo Blog.!');

    }


  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8">
              <h3>
                <i className="fa-solid fa-square-plus"></i> Blog Recientes.
              </h3>
              <p className="mt-2">
                <hr />
                <form onSubmit={addBlogHandler}>
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
                    <label htmlFor="desc">
                      Comentarios. :*
                    </label>
                    <div className="form-floating mb-3">
                      <textarea className="form-control is-valid" id="desc" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} />
                      <label htmlFor="desc">
                        Comentarios. :*
                      </label>
                    </div>
                  </div>
                  <hr />
                  <button className="btn btn-outline-primary me-1 mb-1" type='submit'>
                    <FontAwesomeIcon icon={faPlus} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Agregar.
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

export default AddBlogs;
