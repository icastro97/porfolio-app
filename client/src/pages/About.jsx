import React from "react";
import Image from "./../assets/images/about.webp"

const About = () => {
  return (
    <section className="container-fluid py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen ilustrativa */}
          <div className="col-lg-6 text-center">
            <img
              src={Image} 
              alt="Nosotros"
              className="img-fluid rounded shadow"
              width={500}
              height={500}
            />
          </div>

          {/* Información sobre la empresa */}
          <div className="col-lg-6">
            <h2 className="text-primary fw-bold">Sobre Nosotros</h2>
            <p className="text-muted">
              Somos una empresa especializada en el desarrollo de soluciones de software a medida 
              para pequeñas y medianas empresas. Ayudamos a optimizar procesos, mejorar la 
              productividad y fortalecer la presencia digital con tecnología innovadora.
            </p>
            <p className="text-muted">
              Trabajamos con metodologías ágiles y tecnologías modernas para ofrecer soluciones 
              escalables y seguras, adaptadas a las necesidades de cada negocio.
            </p>
          </div>
        </div>

        {/* Sección Misión y Valores */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="text-primary fw-bold">Nuestra Misión</h4>
              <p className="text-muted">
                Proporcionar soluciones tecnológicas innovadoras y personalizadas que impulsen 
                el crecimiento de nuestros clientes, optimicen sus procesos y mejoren su eficiencia operativa.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="text-primary fw-bold">Nuestros Valores</h4>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center">
                  <i className="bi bi-lightbulb-fill text-warning me-2"></i> Innovación
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-heart-fill text-danger me-2"></i> Compromiso
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i> Calidad
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-people-fill text-primary me-2"></i> Trabajo en equipo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
