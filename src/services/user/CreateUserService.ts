import { hash } from "bcryptjs";
import { UserRequest } from "../../models/user-request.models";
import prismaClient from "../../prisma";

class CreateUserService {
    async execute({ nome, email, login, senha }: UserRequest) {
        if (!email) {
            throw new Error("E-mail não informado!");
        }
        if (!login) {
            throw new Error("Login não informado!");
        }

        const senhaHash = await hash(senha, 8);

        const emailrAlreadyExists = await prismaClient.usuario.findFirst({ where: { email: email } });
        const loginAlreadyExists = await prismaClient.usuario.findFirst({ where: { login: login } });
        if (emailrAlreadyExists) {
            throw new Error("E-mail informado já está cadastrado!");
        }
        if (loginAlreadyExists) {
            throw new Error("Login informado já está cadastrado!");
        }
        const user = await prismaClient.usuario.create({
            data: { email: email, nome: nome, login: login, senha: senhaHash },
            select: { id: true, nome: true, email: true, criado_em: true }
        })
        return user;
    }
}

export { CreateUserService };

