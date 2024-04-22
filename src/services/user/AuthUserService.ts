import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AuthRequest } from "../../models/auth-request.models";
import prismaClient from "../../prisma";

class AuthUserService {
    async execute({ login, senha }: AuthRequest) {
        const user = await prismaClient.usuario.findFirst({ where: { login: login } });
        if (!user) {
            throw new Error("Usuário ou senha incorretos!");
        }

        if (!await compare(senha, user.senha)) {
            throw new Error("Usuário ou senha incorretos!");
        }

        const token = sign(
            {
                nome: user.nome,
                usuario: user.login
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            login: user.login,
            token: token
        }
    }
}

export { AuthUserService };

