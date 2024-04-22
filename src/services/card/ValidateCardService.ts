import prismaClient from "../../prisma";

class ValidateCardService {
    async execute(userId: string, cardNumber: string) {
        if (!cardNumber) {
            throw Error("Número do cartão deve ser informado!")
        }
        const card = await prismaClient.cartao.findFirst({ where: { numero: cardNumber } });
        console.log(card)
        if (!card) {
            return false;
        }
        return card.id_usuario === userId;
    }
}

export { ValidateCardService };

