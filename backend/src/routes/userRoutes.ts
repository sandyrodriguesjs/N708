import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { isAuthenticated } from '../middlewares/IsAuthenticated';
import { registerUserController } from "../controllers/RegisterUserContoller";
import { authUserController } from "../controllers/AuthUserController";


const router = Router();
const prisma = new PrismaClient();

router.post('/login', authUserController.handle.bind(authUserController));

router.post('/register', registerUserController.handle.bind(registerUserController));

// Rota de exemplo: listar todos os usuários
router.get('/', async (req, res) => {
  const usuarios = await prisma.usuarios.findMany();
  res.json(usuarios);
});

export default router;
