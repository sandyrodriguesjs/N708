import { z } from 'zod';

export const usuarioSchema = z.object({
  nome_completo: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  status: z.string().optional(),
});
