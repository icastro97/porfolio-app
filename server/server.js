const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const contactoRoutes = require('./routes/contacto');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/contacto', contactoRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB', err);
  });
