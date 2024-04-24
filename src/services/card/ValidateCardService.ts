import prismaClient from "../../prisma";

class ValidateCardService {
    async execute(userId: string, cardNumber: string, cardCcv: number) {
        if (!cardNumber) {
            throw Error("Número do cartão deve ser informado!")
        }
        const card = await prismaClient.cartao.findFirst({ where: { numero: cardNumber, ccv: cardCcv } });
        if (!card) {
            return false;
        }
        return card.id_usuario === userId;
    }
}

export { ValidateCardService };

