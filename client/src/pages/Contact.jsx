import { useState } from "react";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "Mensaje enviado 🎉",
          text: "Gracias por contactarnos, te responderemos pronto.",
          icon: "success",
          confirmButtonColor: "#007bff"
        });
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        Swal.fire({
          title: "Error 😞",
          text: "No se pudo enviar el mensaje. Intenta más tarde.",
          icon: "error",
          confirmButtonColor: "#dc3545"
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error de conexión",
        text: "No se pudo conectar al servidor.",
        icon: "error",
        confirmButtonColor: "#dc3545"
      });
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-gradient mb-3">Contáctanos</h2>
        <p className="text-center text-muted mb-5">
          ¿Tienes alguna pregunta o propuesta? ¡Escríbenos y te responderemos pronto!
        </p>

        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="contact-card shadow-lg rounded-5 p-5 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Nombre</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><i className="bi bi-person-fill text-primary"></i></span>
                    <input
                      type="text"
                      name="nombre"
                      className="form-control contact-input"
                      placeholder="Tu nombre completo"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Correo Electrónico</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light"><i className="bi bi-envelope-fill text-primary"></i></span>
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
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Mensaje</label>
                  <textarea
                    name="mensaje"
                    className="form-control contact-input"
                    rows="5"
                    placeholder="Escribe tu mensaje aquí"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary contact-btn w-100">
                  <i className="bi bi-send-fill me-2"></i> Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: linear-gradient(135deg, #e9f1ff, #f9fafe);
        }

        .text-gradient {
          background: linear-gradient(90deg, #007bff, #6610f2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-card {
          background-color: #ffffff;
          border-radius: 1rem;
        }

        .contact-input {
          border-radius: 0.5rem !important;
          padding: 14px;
          font-size: 1rem;
          border: 1px solid #ced4da;
          transition: all 0.3s ease;
        }

        .contact-input:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.15);
        }

        .contact-btn {
          background-color: #007bff;
          border-radius: 0.5rem;
          padding: 14px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .contact-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </section>
  );
};

export default Contact;
