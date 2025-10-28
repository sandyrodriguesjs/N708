// src/services/GetUserDetailsService.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetUserDetailsService {
  async execute(userId: number) {
    // Busca o usuário pelo ID (vindo do token)
    const user = await prisma.usuarios.findUnique({
      where: { id_usuario: userId },
      select: {
        id_usuario: true,
        name: true,
        email: true,
        status: true,
        // data_cadastro: true,
        // emprestimos: {
        //   select: {
        //     id_emprestimo: true,
        //     data_retirada: true,
        //     data_prevista_devolucao: true,
        //     data_devolucao: true,
        //     renovado: true,
        //     exemplar: {
        //       select: {
        //         codigo_exemplar: true,
        //         livro: { select: { titulo: true, autor: true } },
        //       },
        //     },
        //   },
        // },
        // reservas: {
        //   select: {
        //     id_reserva: true,
        //     data_reserva: true,
        //     status: true,
        //     posicao_fila: true,
        //     livro: { select: { titulo: true } },
        //   },
        // },
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}
