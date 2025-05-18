const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

// POST /api/contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const nuevoContacto = new Contacto({ nombre, email, mensaje });
    await nuevoContacto.save();

    res.status(201).json({ message: 'Mensaje guardado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

module.exports = router;
