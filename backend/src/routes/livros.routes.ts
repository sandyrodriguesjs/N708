import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// 📚 Listar todos os livros
router.get('/', async (req, res) => {
  const livros = await prisma.livros.findMany({
    include: { exemplares: true }
  });
  res.json(livros);
});

// ➕ Cadastrar novo livro
router.post('/', async (req, res) => {
  const { isbn, titulo, autor, editora, ano_publicacao, sinopse } = req.body;

  const novoLivro = await prisma.livros.create({
    data: {
      isbn,
      titulo,
      autor,
      editora,
      ano_publicacao,
      sinopse
    }
  });

  res.status(201).json(novoLivro);
});

export default router;
