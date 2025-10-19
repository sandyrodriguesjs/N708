import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { criarUsuario } from '../controllers/usuario.controllers.js';


const router = Router();
const prisma = new PrismaClient();

// Rota de exemplo: listar todos os usuários
router.get('/', async (req, res) => {
  const usuarios = await prisma.usuarios.findMany();
  res.json(usuarios);
});

router.post('/', criarUsuario);

export default router;
