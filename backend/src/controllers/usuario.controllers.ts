import bcrypt from 'bcryptjs';
import { usuarioSchema } from '../schemas/usuario.schema.js';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const dadosValidados = usuarioSchema.parse(req.body);

    // ✅ Gera hash da senha antes de salvar
    const senhaHash = await bcrypt.hash(dadosValidados.senha, 10);

    const novoUsuario = await prisma.usuarios.create({
      data: {
        nome_completo: dadosValidados.nome_completo,
        email: dadosValidados.email,
        senha_hash: senhaHash,
        status: dadosValidados.status ?? 'ativo'
      },
    });

    return res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
  } catch (error) {
    return res.status(400).json({ erro: error instanceof Error ? error.message : error });
  }
};
