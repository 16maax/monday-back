import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.routes.js';
import indexRoutes from './routes/index.routes.js';
import cobrarRoutes from './routes/cobrar.routes.js';
import pagarRoutes from './routes/pagar.routes.js';
import actividadesRoutes from './routes/actividades.routes.js';
import inversionesRoutes from './routes/inversion.routes.js';
import loginRoutes from './routes/login.routes.js';

const app = express();

// Configuración de CORS para permitir solicitudes desde https://podermujer.com.mx/
const corsOptions = {
  origin: 'https://podermujer.com.mx',
};

// Aplicar middleware de CORS con opciones personalizadas
app.use(cors(corsOptions));

// Resto de la configuración del servidor...
app.use(express.json());
app.use(indexRoutes);
app.use(usuariosRoutes);
app.use(cobrarRoutes);
app.use(pagarRoutes);
app.use(actividadesRoutes);
app.use(inversionesRoutes);
app.use(loginRoutes);

export default app;
