import { CardRequst } from "../../models/card-request.models";
import prismaClient from "../../prisma";

class CreateCardService {
    async execute({ numero, nomeProprietario, validade, ccv, userId }: CardRequst) {
        if (!numero) {
            throw new Error("Número do cartão não informado!");
        }
        if (!validade) {
            throw new Error("Validade não informada!");
        }
        if (!ccv) {
            throw new Error("Dígito de Segurança não informado!");
        }

        const numberAlreadyExists = await prismaClient.cartao.findFirst({ where: { numero: numero } });
        if (numberAlreadyExists) {
            throw new Error("Número informado já está cadastrado!");
        }
        const card = await prismaClient.cartao.create({
            data: { numero: numero, nome_proprietario: nomeProprietario, validade: validade, ccv: ccv, id_usuario: userId },
            select: { id: true, numero: true, nome_proprietario: true, criado_em: true }
        })
        return card;
    }
}

export { CreateCardService };

