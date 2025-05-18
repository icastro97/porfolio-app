const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contacto', contactoSchema);
