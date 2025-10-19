import { Router } from 'express';
import { autenticar } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', autenticar, async (req, res) => {
  res.json({ mensagem: '✅ O livro está disponível!' });
});

export default router;
