// src/controllers/GetUserDetailsController.ts
import { Request, Response } from "express";
import { GetUserDetailsService } from "../services/GetUserDetailsService";

class GetUserDetailsController {
  async handle(req: Request, res: Response) {
    try {
      //ID do usuário vem do middleware de autenticação
      const { user_id } = req;

      if (!user_id) {
        return res.status(401).json({ error: "Usuário não autenticado" });
      }

      const service = new GetUserDetailsService();
      const user = await service.execute(Number(user_id));

      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export const getUserDetailsController = new GetUserDetailsController();
