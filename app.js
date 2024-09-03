// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
const mongoURI = 'mongodb+srv://Benzin:macaco@cluster0.6xavs.mongodb.net/mi_base_de_datos?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    // Llamar a `createRoles` después de conectar a MongoDB
    createRoles();
  })
  .catch(err => console.error('Error al conectar a MongoDB Atlas', err));

// Middleware para habilitar CORS
app.use(cors({ origin: 'https://admin-web-frontend.onrender.com' }));

// Rutas
const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');
const authRoutes = require('./routes/auth.routes');
const createRoles = require('./libs/initialSetup');


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);


module.exports = app;
