import prismaClient from "../../prisma";

class ListCardsByUserService {
    async execute(userId: string) {
        const cards = await prismaClient.cartao.findMany({ where: { id_usuario: userId } });
        if (cards.length == 0) {
            throw new Error("Usuário informado não possui cartões!");
        }
        return cards;
    }
}

export { ListCardsByUserService };

