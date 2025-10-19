import express from 'express';
import { PrismaClient } from '@prisma/client';
import usuariosRoutes from './routes/usuarios.routes.js';
import livrosRoutes from './routes/livros.routes.js';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas
app.use('/usuarios', usuariosRoutes);
app.use('/livros', livrosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
