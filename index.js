// Importa el módulo express
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

const app = express();

// Configuración de express para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

// Conexión a la base de datos
(async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log('Conexión correcta a la BD');
    } catch (error) {
        console.log('Error al conectar a la base de datos:', error);
    }
})();

// Configuración de Pug como motor de vistas
app.set('view engine', 'pug');
app.set('views', './views');

// Configuración de archivos estáticos
app.use(express.static('public'));

// Configuración de rutas
app.use('/auth', usuarioRoutes);

// Define el puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
