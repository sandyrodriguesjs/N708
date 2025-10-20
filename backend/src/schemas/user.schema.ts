import { z } from "zod";
import { USER_STATUS } from "../domain/constants.js";

export const usuarioSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  status: z.enum([USER_STATUS.ATIVO, USER_STATUS.BLOQUEADO]).optional(),
});
