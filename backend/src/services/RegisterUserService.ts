import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { usuarioSchema } from "../schemas/user.schema.js";

const prisma = new PrismaClient();

export async function registerUserService(dados: any) {
  // ✅ Valida os dados com Zod
  const dadosValidados = usuarioSchema.parse(dados);

  // ✅ Gera hash da senha antes de salvar
  const senhaHash = await bcrypt.hash(dadosValidados.password, 10);

  // ✅ Cria usuário no banco
  const novoUsuario = await prisma.usuarios.create({
    data: {
      name: dadosValidados.name, // ⚠️ se no schema for "name", ajuste aqui
      email: dadosValidados.email,
      password: senhaHash,
      status: dadosValidados.status ?? "ativo",
    },
  });

  return novoUsuario;
}
