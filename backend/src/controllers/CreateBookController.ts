import { Request, Response } from "express";
import { CreateBookService } from "../services/CreateBookService";

export class CreateBookController {
  async handle(req: Request, res: Response): Promise<void> {
    const { isbn, titulo, autor, editora, ano_publicacao, sinopse } = req.body;

    const service = new CreateBookService();

    try {
      const livro = await service.execute({
        isbn,
        titulo,
        autor,
        editora,
        ano_publicacao: Number(ano_publicacao),
        sinopse,
      });

      res.status(201).json(livro);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const createBookController = new CreateBookController();
