import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://porfolio-app-production.up.railway.app/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje");
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold text-primary">Contáctanos</h2>
      <p className="text-center text-muted">
        Déjanos tu mensaje y te responderemos a la brevedad.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control contact-input"
                  placeholder="Tu nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control contact-input"
                  placeholder="tucorreo@ejemplo.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Mensaje</label>
                <textarea
                  name="mensaje"
                  className="form-control contact-input"
                  rows="4"
                  placeholder="Escribe tu mensaje"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 contact-btn">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      {/* styles se mantienen igual */}
    </section>
  );
};

export default Contact;
<style jsx>{`
  .contact-input {
    border-radius: 0.5rem;
    border: 1px solid #ced4da;
  }
  .contact-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
  }
  .contact-btn {
    background-color: #007bff;
    border-radius: 0.5rem;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
  }
`}</style>