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
              <h4 className="fw-bold text-primary">Gestión de Inventarios</h4>
              <p className="text-muted">
                Implementamos un sistema de gestión de inventarios para una <strong>cigarrería local</strong>, 
                permitiéndoles controlar su stock en tiempo real y reducir pérdidas por vencimiento o faltantes.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold text-primary">E-commerce para Pañalera</h4>
              <p className="text-muted">
                Desarrollamos una plataforma de comercio electrónico para <strong>Pañalera Súper Baby</strong>, 
                ampliando su alcance y facilitando las ventas en línea con pagos seguros y entregas rápidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
