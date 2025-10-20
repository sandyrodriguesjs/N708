import { Request, Response } from "express";
import { registerUserService } from "../services/RegisterUserService.js";

class RegisterUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const novoUsuario = await registerUserService(req.body);
      return res.status(201).json({
        mensagem: "Usuário criado com sucesso!",
        usuario: novoUsuario,
      });
    } catch (error) {
      return res.status(400).json({
        erro: error instanceof Error ? error.message : error,
      });
    }
  }
}

export const registerUserController = new RegisterUserController();