import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className='me-5 d-none d-lg-block'>
              <span>Conéctate Con Nosotros En Las Redes Sociales. :*</span>
            </div>
            <div>
              {/* Instagram */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1 me-4 text-reset" style={{ fontSize: "25px" }} href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-instagram" style={{ fontSize: "25px", color: "#ac2bac" }} />
              </a>
              {/* Youtube */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1 me-4 text-reset" style={{ fontSize: "25px" }} href="https://www.youtube.com/embed/lUIAHkN8TlQ" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-youtube" style={{ fontSize: "25px", color: "#FD1D1D" }} />
              </a>
              {/* WhatsAPP */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1 me-4 text-reset" style={{ fontSize: "25px" }} href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                <i className="fab fa-whatsapp" style={{ fontSize: "25px", color: "#008000" }} />
              </a>
            </div>
          </section>
          {/* Section: Social media */}
          {/* Section: Links */}
          <section className="">
            <div className='container text-center text-md-start mt-5'>
              {/*Grid row*/}
              <div className="row mt-3">
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase fw-bold mb-4">
                    MENU.
                  </h5>
                  <hr className="my-10" />
                  <ul className="list-unstyled mb-0">
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Inicio.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/shop" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Ver Productos.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/blogs" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Blog.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/location" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Contactos.
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase fw-bold mb-4">
                    &Aacute;REA LEGAL.
                  </h5>
                  <hr className="my-10" />
                  <ul className="list-unstyled mb-0">
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/options1" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Términos y Condiciones.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/options2" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Políticas De Envios, Cambios, Devoluciones Y
                        Garantías.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/faq" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Preguntas Frecuentes.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/about" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Quiénes Somos.
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase fw-bold mb-4">
                    ACCEDER.
                  </h5>
                  <hr className="my-10" />
                  <ul className="list-unstyled mb-0">
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/login" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Inicia Sesi&oacute;n.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/register" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Regístrarse.
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase fw-bold mb-4">
                    CONTACTOS.
                  </h5>
                  <hr className="my-10" />
                  <ul className="list-unstyled mb-0">
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/location" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Villavicencio, Meta, América Del Sur.
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <Link to="/location" rel="noopener noreferrer" className="text-reset">
                        <i className="fa fa-angle-double-right wv_circle" /> Dirección: MonteArroyo Reservados 2 (Casa 6 Manzana
                        3).
                      </Link>
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <p className="text-reset">
                        <a href="mailto:nuryvalenzuelajoyeria@gmail.com"
                          rel="noopener noreferrer" className="text-muted">
                          <span className="linkEnlace">
                            <i className="fab fa-telegram"></i> nuryvalenzuelajoyeria@gmail.com
                          </span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-4 bg-light">
          CopyRight &copy; {new Date().getFullYear()}. :*
          <a className="text-reset fw-bold" href="https://nuryvalenzuelajoyeria.com.co/">nuryvalenzuelajoyeria.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;