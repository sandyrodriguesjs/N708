import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'minha_chave_super_secreta';

export const autenticar = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // ✅ Verifica se o header existe
  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  // ✅ Extrai o token corretamente
  const token = authHeader.split(' ')[1];

  // ✅ Garante que não é undefined (resolve o erro de tipagem)
  if (!token) {
    return res.status(401).json({ erro: 'Token ausente no cabeçalho Authorization' });
  }

  try {
    // ✅ Agora o TypeScript sabe que `token` é string
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).usuario = decoded; // opcional: anexar dados do usuário ao request
    next();
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
};
