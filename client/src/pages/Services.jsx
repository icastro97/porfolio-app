const Services = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold text-primary">Nuestros Servicios</h2>
      <p className="text-center text-muted">
        Ofrecemos soluciones tecnológicas innovadoras para potenciar tu negocio.
      </p>

      <div className="row mt-4">
        {[
          { icon: "bi-laptop", title: "Desarrollo Web", desc: "Creación de sitios web responsivos con tecnologías modernas." },
          { icon: "bi-phone", title: "Apps Móviles", desc: "Aplicaciones nativas y multiplataforma con UX optimizado." },
          { icon: "bi-gear", title: "Automatización", desc: "Soluciones personalizadas para mejorar la eficiencia operativa." }
        ].map((service, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-4 service-card">
              <i className={`bi ${service.icon} fs-1 text-primary`}></i>
              <h4 className="mt-3 fw-bold">{service.title}</h4>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 10px;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </section>
  );
};

export default Services;
