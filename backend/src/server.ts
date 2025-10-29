import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';
import booksRoutes from './routes/booksRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rotas
app.use('/', userRoutes);
app.use('/', booksRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
