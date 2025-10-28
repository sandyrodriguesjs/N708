// src/middlewares/IsAuthenticated.ts
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "minha_chave_super_secreta";

interface CustomJwtPayload extends JwtPayload {
  sub: string; // ID do usuário
}

class IsAuthenticated {
  public async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      //Verifica se o header existe
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ erro: "Token de autenticação não fornecido" });
      }

      //Confere o formato do header (deve ser "Bearer <token>")
      const parts = authHeader.split(" ");
      if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ erro: "Formato do token inválido" });
      }

      const token = parts[1];
      if (!token || token.trim() === "") {
        return res.status(401).json({ erro: "Token ausente no cabeçalho Authorization" });
      }

      //Verifica e decodifica o token
      const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload;

      //Garante que o token tenha o campo `sub` (ID do usuário)
      if (!decoded.sub) {
        return res.status(401).json({ erro: "Token sem identificador de usuário" });
      }

      //Adiciona o ID do usuário autenticado à requisição
      req.user_id = decoded.sub;

      return next();
    } catch (error: any) {
      //Tratamento específico para erros de JWT
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ erro: "Token expirado. Faça login novamente." });
      }
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ erro: "Token inválido. Faça login novamente." });
      }

      console.error("Erro ao validar token:", error);
      return res.status(500).json({ erro: "Erro interno na verificação do token" });
    }
  }
}

export const isAuthenticated = new IsAuthenticated();
