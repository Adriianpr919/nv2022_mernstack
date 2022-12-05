import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EditBlog = ({ blog, setOpenEdit }) => {

  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);

  const editBlogHandler = async (e) => {
    e.preventDefault();

    try {

      const { data } = await axios.put("/api/blogs/update", {
        _id: blog._id,
        title,
        description
      });

      console.log(data);
      toast.success("¡.Has Actualizado Correctamente El Blog.!");
      setOpenEdit(false);

    } catch (err) {
      toast.error("¡.Actualización Fallida, Inténtalo De Nuevo.!")
    }
  }

  return (
    <>
      <div className="card mb-3">
        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: 'url(../../assets/img/icons/spot-illustrations/corner-4.png)' }} />
        <div className="card-body position-relative">
          <div className="row">
            <div className="col-lg-8" style={{ textAlign: "justify" }}>
              <h3>
                <FontAwesomeIcon icon={faRefresh} className="far fa-check-circle me-1" data-fa-transform="shrink-3" /> Editar Blogs.
              </h3>
              <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
              <p className="mt-2">
                <hr />
                <form onSubmit={editBlogHandler}>
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
                      <textarea className="form-control is-valid" id="desc" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false} style={{ height: 100 }} />
                      <label htmlFor="desc">
                        Comentarios. :*
                      </label>
                    </div>
                  </div>
                  <hr />
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

export default EditBlog;
