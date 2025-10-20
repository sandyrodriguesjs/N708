import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_super_secreta";

class IsAuthenticated {
  public async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const authHeader = req.headers.authorization;

    // ✅ Verifica se o header existe
    if (!authHeader) {
      return res.status(401).json({ erro: "Token não fornecido" });
    }

    // ✅ Extrai o token corretamente
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ erro: "Token ausente no cabeçalho Authorization" });
    }

    try {
      // ✅ Verifica e decodifica o token
      const decoded = jwt.verify(token, JWT_SECRET);
      (req as any).usuario = decoded; // opcional: anexar usuário ao request

      return next(); // ✅ agora o TypeScript reconhece `next`
    } catch (error) {
      return res.status(401).json({ erro: "Token inválido ou expirado" });
    }
  }
}

export const isAuthenticated = new IsAuthenticated();
