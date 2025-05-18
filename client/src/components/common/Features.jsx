const Features = () => {
  return (
    <section className="container text-center my-5">
      <h2 className="fw-bold text-primary">Nuestros Servicios</h2>
      <p className="text-muted">Soluciones tecnológicas adaptadas a las necesidades de tu negocio.</p>

      <div className="row mt-4">
        {[
          { icon: "bi-code-slash", title: "Desarrollo Web", desc: "Aplicaciones y sitios web modernos y eficientes." },
          { icon: "bi-phone", title: "Apps Móviles", desc: "Desarrollamos aplicaciones nativas y multiplataforma." },
          { icon: "bi-gear", title: "Automatización", desc: "Optimizamos procesos con soluciones personalizadas y automatización inteligente." },
        ].map((service, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <div className="icon-container bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: "80px", height: "80px" }}>
                <i className={`bi ${service.icon} fs-2`}></i>
              </div>
              <h4 className="fw-bold">{service.title}</h4>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
