import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// ⚠️ use uma chave secreta real via variável de ambiente
const JWT_SECRET = process.env.JWT_SECRET || 'minha_chave_super_secreta';

class AuthUserContoller {

  public async handle(req: Request, res: Response): Promise<Response> {

    const { email, password } = req.body;

    try {
      const usuario = await prisma.usuarios.findUnique({ where: { email } });

      if (!usuario) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
      }

      // ✅ Compara a senha com o hash salvo
      const senhaValida = await bcrypt.compare(password, usuario.password);
      if (!senhaValida) {
        return res.status(401).json({ erro: 'Credenciais inválidas' });
      }

      // ✅ Gera o token JWT
      const token = jwt.sign(
        { id: usuario.id_usuario, email: usuario.email },
        JWT_SECRET,
        { expiresIn: '2h' }
      );

      return res.status(200).json({
        mensagem: 'Login realizado com sucesso!',
        token,
        usuario: {
          id: usuario.id_usuario,
          nome: usuario.name,
          email: usuario.email
        }
      });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro no servidor' });
    }
  }
};

export const authUserController = new AuthUserContoller(); 
