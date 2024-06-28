"use client";
import React, { useEffect } from "react";
import "../js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/nucleo-svg.css";
import "./css/nucleo-icons.css";
import "./css/material-kit-pro.css";

import PluginInitializer from "./plugins";
import { Link } from "@material-ui/core";

function Page() {
  useEffect(() => {
    if (typeof document !== undefined) {
      // Importar bootstrap solo en el cliente
      import("bootstrap/dist/js/bootstrap.min.js");
    }
  }, []);
  return (
    <>
      <PluginInitializer />

      <div>
        <nav className="navbar navbar-expand-lg blur blur-rounded position-absolute my-3 top-0 border-bottom py-3 z-index-3 shadow start-0 end-0 mx-4">
          <div className="container">
            <a className="navbar-brand text-gradient text-primary" href="#">
              <h5>Polo Tecnológico</h5>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-header-2"
              aria-controls="navbar-header-2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar-header-2">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/polo/index.php"
                    target="_blank"
                  >
                    Ir a Polo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/registro/cerrar-session.php"
                    target="_blank"
                  >
                    <span className="ms-1 font-weight-bold text-secondary">
                      Cerrar Sesión
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-gradient text-info"
                    href="https://twitter.com/PoloTecLR"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-gradient text-info mx-2"
                    href="https://www.facebook.com/profile.php?id=100083851852563"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-gradient text-info"
                    href="https://www.instagram.com/polotecnologicolr/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="header-rounded-images">
          <div className="page-header min-vh-90">
            <img
              alt="image"
              className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
              loading="lazy"
              src="img/inicio2.jpg"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-flex">
                  <div className="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
                    <h2 className="text-dark mb-4">
                      Registro Economía del Conocimiento
                    </h2>
                    <p className="lead text-dark pe-md-5 me-md-5">
                      Llena el formulario, completa el registro y comenzarás a
                      vivir tu futuro. Nuestro objetivo es incrementar tus
                      oportunidades laborales, acompañarte con capacitaciones
                      100% gratis y hacer tus logros y habilidades visibles en
                      bootcamps o búsquedas laborales en las empresas líderes de
                      base tecnológica asociadas al PoloTecnológico La Rioja.
                    </p>
                    <div className="buttons">
                      <button
                        className="btn bg-gradient-primary mt-4 me-2"
                        data-bs-target="#exampleModalForm"
                        data-bs-toggle="modal"
                        type="button"
                      >
                        Iniciar Sesión
                      </button>
                      <Link href="home-card">
                        <button
                          className="btn btn-outline-secondary mt-4 ms-3"
                          type="button"
                        >
                          Registrarse
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="exampleModalForm"
            className="modal fade"
            id="exampleModalForm"
            tabIndex="-1"
          >
            <div
              className="modal-dialog modal-danger modal-dialog-centered modal-"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-body p-0">
                  <div className="card bg-gray-200 shadow border-0 mb-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div className="bg-gradient-primary shadow-info border-radius-lg py-3 pe-1 text-center py-4">
                        <h4 className="font-weight-bolder text-white mt-1 mb-0">
                          Bienvenido
                        </h4>
                        <p className="mb-1 text-sm text-white">
                          Seleccione el tipo de inicio de sesión
                        </p>
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <a href="login-user">
                        <button className="btn bg-gradient-primary mt-4 mb-0 me-2">
                          Inicio de sesión usuario
                        </button>
                      </a>
                      <a href="login-company">
                        <button className="btn bg-gradient-secondary mt-4 mb-0 ms-2">
                          Inicio de sesión compañía
                        </button>
                      </a>
                    </div>
                    <div className="card-footer text-center pt-0">
                      <p className="mb-4 text-sm mx-auto">
                        No tienes una cuenta?{" "}
                        <a
                          className="text-primary text-gradient font-weight-bold"
                          href="home-card"
                        >
                          ¡Registrarte Ahora!
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
          <section className="pt-3 pb-4" id="count-stats">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
                  <div className="row">
                    <div className="col-md-4 position-relative">
                      <div className="p-3 text-center">
                        <h1 className="text-gradient text-primary">
                          <span countto="4692" id="state1">
                            0
                          </span>
                          +
                        </h1>
                        <h5 className="mt-3">Registro RR.HH</h5>
                        <p className="text-sm font-weight-normal">
                          Registro de Recursos Humanos de Economía del
                          Conocimiento.
                        </p>
                      </div>
                      <hr className="vertical dark" />
                    </div>
                    <div className="col-md-4 position-relative">
                      <div className="p-3 text-center">
                        <h1 className="text-gradient text-primary">
                          <span countto="13" id="state2">
                            0
                          </span>
                          +
                        </h1>
                        <h5 className="mt-3">Empresas</h5>
                        <p className="text-sm font-weight-normal">
                          Trabajamos activamente con Empresas que confian en
                          nuestro trabajo.
                        </p>
                      </div>
                      <hr className="vertical dark" />
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 text-center">
                        <h1 className="text-gradient text-primary">
                          <span countto="500" id="state3">
                            0
                          </span>
                          +
                        </h1>
                        <h5 className="mt-3">Puestos de Trabajo</h5>
                        <p className="text-sm font-weight-normal">
                          Gracias a nuestra comunidad pudimos generar nuevos
                          puestos de trabajo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-5 py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
                  <div className="rotating-card-container">
                    <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
                      <div
                        className="front front-background"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="card-body py-7 text-center">
                          <i className="material-icons text-white text-4xl my-3">
                            touch_app
                          </i>
                          <h3 className="text-white">
                            Estas a un click de <br /> ¡Comenzar un cambio!
                          </h3>
                          <p className="text-white opacity-8">
                            Unite a la comunidad del Polo Tecnológico y comenza
                            a disfrutar de los beneficios
                          </p>
                        </div>
                      </div>
                      <div
                        className="back back-background"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80)",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="card-body pt-7 text-center">
                          <h3 className="text-white">
                            Unite a Nuestra comunidad
                          </h3>
                          <p className="text-white opacity-8">
                            Creamos un ecosistema confiable, para poder crecer
                            junto a ustedes.
                          </p>
                          <a
                            className="btn btn-dark btn-sm w-50 mx-auto mt-3"
                            href="pages/sign-up/registro.php"
                            target="_blank"
                          >
                            ¡Comenza a ser parte!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 ms-auto">
                  <div className="row">
                    <div className="col-8">
                      <div className="p-3 text-start border-radius-lg">
                        <h2 className="mt-5">
                          Forma parte de la Bolsa de Trabajo Digital del Polo
                          Tecnológico!
                        </h2>
                        <p className="text-dark text-lg mt-3">
                          <span className="font-weight-bold">
                            Polo Tecnológico La Rioja,
                          </span>
                          está trabajando de forma activa para poder brindar
                          soluciones y generar nuevos vínculos. Es por ello que
                          desarrollamos un lugar donde tanto empresas como
                          talentos especializados pueden formar un vínculo para
                          poder generar proyectos de desarrollo.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-md-4 py-3">
                      <div className="p-3 text-start">
                        <i className="material-icons text-4xl text-gradient text-primary">
                          diversity_3
                        </i>
                        <h5 className="mt-3">Unite a Nuestra comunidad!</h5>
                        <p>
                          Juntamos la innovación, nuevas habilidades
                          tecnológicas y conocimiento de la industria para
                          ayudar a los clientes a innovar a escala, transformar
                          y hacer crecer sus negocios.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 py-3">
                      <div className="p-3 text-start">
                        <i className="material-icons text-4xl text-gradient text-primary">
                          school
                        </i>
                        <h5 className="mt-3">Te Ayudamos a capacitarte!</h5>
                        <p>
                          Somos un ente gubernamental en la que valoramos el
                          desarrollo personal, es por eso que ofrecemos cursos
                          de capacitación para nuestros afiliados.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-4 py-3">
                      <div className="p-3 text-start">
                        <i className="material-icons text-4xl text-gradient text-primary">
                          emoji_people
                        </i>
                        <h5 className="mt-3">¿Busca nuevos retos?</h5>
                        <p>
                          La Bolsa de Trabajo del Polo Tecnológico ofrece
                          excelentes oportunidades profesionales para personal
                          especializado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ms-auto me-auto text-center">
                  <h2 className="text-gradient text-dark">
                    ¡Creando el Futuro!
                  </h2>
                  <p>
                    Junto a nuestras Autoridades referentes de Economia del
                    Conocimiento.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gradient-dark position-relative overflow-hidden">
            <img
              alt="pattern-lines"
              className="position-absolute opacity-6"
              src="img/waves-white.svg"
            />
            <div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
              <svg
                version="1.1"
                viewBox="0 -2 1920 157"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>wave-down</title>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#FFFFFF" fillRule="nonzero">
                    <g id="wave-down">
                      <path
                        d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
                        id="Path-Copy-2"
                        transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="container py-lg-10 py-7">
              <div className="row mt-5">
                <div className="col-lg-3 col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image">
                        <img
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                          src="img/ricardo_quintela.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Ricardo Quintela
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Ricardo Clemente Quintela
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-dark text-gradient text-uppercase">
                        Gobernador de la Provincia de La Rioja
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image">
                        <img
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                          src="img/federico_bazan.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Federico Bazán
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Federico Bazán
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-dark text-gradient text-uppercase">
                        Ministro de Trabajo, Empleo e Industria
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image">
                        <img
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                          src="img/hugo_vera.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">Hugo Vera</h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Hugo Vera
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-dark text-gradient text-uppercase">
                        Secretario de Ciencia y Tecnología
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 mb-lg-0 mb-4">
                  <div className="card shadow-lg">
                    <div className="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a className="d-block blur-shadow-image">
                        <img
                          alt="img-blur-shadow"
                          className="img-fluid shadow border-radius-lg"
                          src="img/cristian_oliva.jpg"
                        />
                      </a>
                    </div>
                    <div className="card-body text-center bg-white border-radius-lg p-3 pt-0">
                      <h5 className="mt-3 mb-1 d-md-block d-none">
                        Cristian Oliva
                      </h5>
                      <p className="mb-1 d-md-none d-block text-sm font-weight-bold text-darker">
                        Cristian Oliva
                      </p>
                      <p className="mb-0 text-xs font-weight-bolder text-dark text-gradient text-uppercase">
                        Director Gral. de Economía del Conocimiento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute w-100 bottom-0">
              <svg
                version="1.1"
                viewBox="0 -1 1920 166"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>wave-up</title>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    transform="translate(0.000000, 5.000000)"
                  >
                    <g id="wave-up" transform="translate(0.000000, -5.000000)">
                      <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </section>
          <section className="py-7">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card overflow-hidden">
                    <div className="row">
                      <div className="col-lg-7">
                        <form className="p-3" id="contact-form" method="post">
                          <div className="card-header px-4 py-sm-5 py-3">
                            <h2>¿ Como podemos Ayudarte ?</h2>
                            <p className="lead">
                              {" "}
                              No importa de qué se trate, ¡estamos aquí para
                              ayudarte! <br />
                              ¡Envía tu consulta! Nuestro equipo, te respondera
                              tan rapido como sea posible.
                            </p>
                          </div>
                          <div className="card-body pt-1">
                            <div className="row">
                              <div className="col-md-12 pe-2 mb-3">
                                <div className="input-group input-group-static">
                                  <label>Su Nombre:</label>
                                  <input
                                    className="form-control"
                                    placeholder="Nombre Completo"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 pe-2 mb-3">
                                <div className="input-group input-group-static">
                                  <label>Asunto:</label>
                                  <input
                                    className="form-control"
                                    placeholder="Su Asunto"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 pe-2 mb-3">
                                <div className="input-group input-group-static mb-0">
                                  <label>Ingrese su Consulta:</label>
                                  <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    placeholder="Me comunico para..."
                                    rows="6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 text-end ms-auto">
                                <button
                                  className="btn btn-primary bg-gradient-primary mb-0"
                                  type="submit"
                                >
                                  Enviar Consulta
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="col-lg-5 position-relative bg-cover px-0"
                        style={{
                          backgroundImage:
                            "url('../../assets/img/examples/blog4.jpg')",
                        }}
                      >
                        <div className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                          <div className="mask bg-gradient-primary opacity-9" />
                          <div className="p-5 position-relative text-start my-auto">
                            <h3 className="text-white">
                              Ponete en contacto con nosotros
                            </h3>
                            <p className="text-white opacity-8 mb-4">
                              ¡Estamos aquí para ayudarte! <br />
                              Utiliza nuestros canales de comunicación para
                              llegar a nosotros.
                            </p>
                            <div className="d-flex p-2 text-white">
                              <i className="material-icons text-sm">email</i>
                              <span className="text-sm opacity-8 ps-3">
                                info@polotec.ar
                              </span>
                            </div>
                            <div className="d-flex p-2 text-white">
                              <i className="material-icons text-sm">
                                location_on
                              </i>
                              <span className="text-sm opacity-8 ps-3">
                                {" "}
                                Santa Fé y Copiapo, Ciudad de La Rioja
                              </span>
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4 mb-6">
            <div className="container">
              <div className="row my-5">
                <div className="col-md-8 mx-auto text-center">
                  <h2>¿ Tenes alguna Duda ?</h2>
                  <p>
                    {" "}
                    En este panel encontraras algunas de las preguntas que nos
                    realizan nuestros usuarios.{" "}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="accordion" id="accordionRental">
                    <div className="accordion-item mb-3">
                      <h5 className="accordion-header" id="headingOne">
                        <button
                          aria-controls="collapseOne"
                          aria-expanded="true"
                          className="accordion-button border-bottom font-weight-bold"
                          data-bs-target="#collapseOne"
                          data-bs-toggle="collapse"
                          type="button"
                        >
                          ¿Quiénes somos?
                          <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
                          <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
                        </button>
                      </h5>
                      <div
                        aria-labelledby="headingOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionRental"
                        id="collapseOne"
                      >
                        <div className="accordion-body text-sm opacity-8">
                          El Polo Tecnológico es una entidad autárquica que
                          trabaja de manera articulada con el Ministerio de
                          Trabajo Empleo e Industria y con la secretaría de
                          ciencia y tecnología, promoviendo el desarrollo de la
                          economía del conocimiento en la región, fomentando la
                          innovación, el emprendimiento, impulsando la
                          diversificación de la matriz productiva y la creación
                          de empleo de alta calidad.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          aria-controls="collapseTwo"
                          aria-expanded="false"
                          className="accordion-button border-bottom font-weight-bold"
                          data-bs-target="#collapseTwo"
                          data-bs-toggle="collapse"
                          type="button"
                        >
                          ¿Puedo aplicar desde cualquier parte del mundo?
                          <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
                          <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
                        </button>
                      </h5>
                      <div
                        aria-labelledby="headingTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRental"
                        id="collapseTwo"
                      >
                        <div className="accordion-body text-sm opacity-8">
                          Es la Herramienta del Polo Tecnológico La Rioja, para
                          fortalecer el networking de la economía del
                          conocimiento de la provincia a los fines de fortalecer
                          la conexión del talento riojano con las empresas en
                          alianza con el Polo, además quienes quieran fortalecer
                          sus habilidades digitales y formarse en tecnología,
                          mediante este registro gozarán de las novedad del
                          “Programa de Formación con Empleabilidad”.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          aria-controls="collapseThree"
                          aria-expanded="false"
                          className="accordion-button border-bottom font-weight-bold"
                          data-bs-target="#collapseThree"
                          data-bs-toggle="collapse"
                          type="button"
                        >
                          ¿Cuales son las posiciones laborales a las que puedo
                          aplicar?
                          <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
                          <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
                        </button>
                      </h5>
                      <div
                        aria-labelledby="headingThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRental"
                        id="collapseThree"
                      >
                        <div className="accordion-body text-sm opacity-8">
                          MERN STACK, Cloud Computing, Metodologías ágiles, Data
                          analytics, Marketing Digital, Diseño UX/UI,
                          Introducción a la programación, Front End, Back End,
                          QA automation, Community management, Digital product
                          management, E-mail marketing, Salesforce y más…
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-3">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          aria-controls="collapseFour"
                          aria-expanded="false"
                          className="accordion-button border-bottom font-weight-bold"
                          data-bs-target="#collapseFour"
                          data-bs-toggle="collapse"
                          type="button"
                        >
                          Otras Consultas
                          <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
                          <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
                        </button>
                      </h5>
                      <div
                        aria-labelledby="headingFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRental"
                        id="collapseFour"
                      >
                        <div className="accordion-body text-sm opacity-8">
                          No importa de qué se trate, ¡estamos aquí para
                          ayudarte! ¡Envía tu consulta! Nuestro equipo, te
                          respondera tan rapido como sea posible. Para más
                          información envíanos un mensaje al siguiente mail:
                          info@polotec.ar.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="py-2">
            <div className="container">
              <div className="row">
                <div className="col-8 mx-auto text-center">
                  <h6 className="opacity-5">
                    ¡Estamos construyendo el Futuro y estas empresas nos ayudan
                    a hacerlo!
                  </h6>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/materiad-logo.png"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/epidata-logo.png"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/banco-rioja.svg"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/incluit.svg"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/logo-tsoft.png"
                  />
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                  <img
                    alt="logo"
                    className="w-100 opacity-9"
                    src="img/practia-logo.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer py-7 position-relative bg-gradient-dark overflow-hidden">
            <div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
              <svg
                version="1.1"
                viewBox="0 -2 1920 157"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>wave-down</title>
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#FFFFFF" fillRule="nonzero">
                    <g id="wave-down">
                      <path
                        d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
                        id="Path-Copy-2"
                        transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="moove-container-fluid footer-columns">
              <div className="row">
                <div className="col-lg-4 mx-auto text-center mt-7 ">
                  <h6 className="footer-title text-gray 400">Seguinos</h6>
                  <div className="mt-4">
                    <button
                      className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                      data-original-title="Log"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      href="https://www.facebook.com/profile.php?id=100083851852563"
                      type="button"
                    >
                      <i className="fab fa-facebook" />
                    </button>
                    <button
                      className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                      data-original-title="Log"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      href="https://twitter.com/PoloTecLR"
                      type="button"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                      data-original-title="Log"
                      data-placement="bottom"
                      data-toggle="tooltip"
                      href="https://www.instagram.com/polotecnologicolr/"
                      type="button"
                    >
                      <i className="fab fa-instagram" />
                    </button>
                  </div>
                </div>
                <div className="col-md-4 column-left text-center">
                  <h5 className="footer-title">Ubicación</h5>
                  <div className="text-center">
                    <iframe
                      allowFullScreen
                      height="250"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669.9721293208788!2d-66.85961219495272!3d-29.417539898847338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427db1f846d786f%3A0x189b9f0f8f45ea1b!2sPolo%20Tecnologico!5e0!3m2!1ses!2sar!4v1675255949895!5m2!1ses!2sar"
                      style={{
                        border: "0",
                      }}
                      width="auto"
                    />
                  </div>
                </div>
                <div className="col-md-4 column-right">
                  <div className="text-center">
                    <img
                      alt="logo"
                      src="img/Logo_Polo.png"
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-5">
                <div className="col-md-3 column-center">
                  <img
                    alt=""
                    className="w-75"
                    src="//polotec.ar/campus/imagenes/provincia_q_late.png"
                  />
                </div>
                <div className="col-md-3 column-center">
                  <img
                    alt=""
                    className="w-75"
                    src="//polotec.ar/campus/imagenes/ciencia_y_tec.png"
                  />
                </div>
                <div className="col-md-3 column-center">
                  <img
                    alt=""
                    className="w-75"
                    src="//polotec.ar/campus/imagenes/ministerio.png"
                  />
                </div>
                <div className="col-md-3 column-center">
                  <img
                    alt=""
                    className="w-75"
                    src="https://polotec.ar/campus/imagenes/rioja.png"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8 mx-auto text-center mt-1">
                <p className="mb-0 text-white">
                  - Desarrollado por : Dirección General de Economia del
                  Conocimiento -{" "}
                  <script
                    dangerouslySetInnerHTML={{
                      __html: "document.write(new Date().getFullYear())",
                    }}
                  />{" "}
                  -
                </p>
              </div>
            </div>
          </footer>
          <script src="js/js/core/popper.min.js" type="text/javascript" />
        </div>
      </div>
    </>
  );
}

export default Page;
