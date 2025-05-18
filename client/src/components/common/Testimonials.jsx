const Testimonials = () => {
    return (
      <section className="bg-light py-5 text-center">
      <div className="container">
        <h2 className="fw-bold text-primary">Nuestro Impacto</h2>
        <p className="text-muted">
          Desarrollamos soluciones innovadoras que transforman negocios y optimizan procesos.
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold text-primary">Automatización Empresarial</h4>
              <p className="text-muted">
                Implementamos un sistema de automatización para <strong>TechCorp</strong>, 
                optimizando su flujo de trabajo y reduciendo tiempos operativos en un 40%.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold text-primary">Expansión Digital</h4>
              <p className="text-muted">
                Ayudamos a <strong>StartupX</strong> a lanzar su plataforma digital, 
                alcanzando más clientes y aumentando sus ingresos en un 60%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default Testimonials;
  