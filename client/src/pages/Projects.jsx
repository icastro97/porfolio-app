import ecommerceImg from '../assets/images/ecomerce.png';
import inventarioImg from '../assets/images/inventario.png';
import integracionImg from '../assets/images/ventas.png';


const Projects = () => {
  const projects = [
    { img: ecommerceImg, title: "E-commerce Personalizado", desc: "Desarrollo de una plataforma de comercio electrónico a medida." },
    { img: inventarioImg, title: "Gestión de Inventarios", desc: "App móvil para administrar inventarios en tiempo real." },
    { img: integracionImg, title: "Integración Empresarial", desc: "Sistemas conectados a la nube para mayor eficiencia." }
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold text-primary">Nuestros Proyectos</h2>
      <p className="text-center text-muted">
        Soluciones innovadoras que han transformado negocios.
      </p>

      <div className="row mt-4 g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card project-card border-0 shadow-sm">
              <img src={project.img} className="card-img-top project-img" alt={project.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 10px;
          }
          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
          }
          .project-img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            transition: transform 0.3s ease;
          }
          .project-card:hover .project-img {
            transform: scale(1.05);
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
