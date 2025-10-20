import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createBookController } from "../controllers/CreateBookController";
import { getBooksController } from "../controllers/GetBooksController";

const router = Router();
const prisma = new PrismaClient();

// 📚 Listar todos os livros
router.get("/livros", (req, res) => getBooksController.listAll(req, res));

// 📘 Listar livro por ID
router.get("livros/:id", (req, res) => getBooksController.listById(req, res));

// ➕ Cadastrar novo livro
router.post("/", (req, res) => createBookController.handle(req, res));

export default router;
