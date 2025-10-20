import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetBooksService {
  // 📚 Lista todos os livros
  async listAllBooks() {
    return await prisma.livros.findMany({
      include: {
        exemplares: true,
        reservas: true,
        avaliacoes: true,
      },
    });
  }

  // 📘 Lista livro por ID
  async listBooksById(id_livro: number) {
    const livro = await prisma.livros.findUnique({
      where: { id_livro },
      include: {
        exemplares: true,
        reservas: true,
        avaliacoes: true,
      },
    });

    if (!livro) {
      throw new Error("Livro não encontrado.");
    }

    return livro;
  }
}
