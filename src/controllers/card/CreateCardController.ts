import { Request, Response } from "express";
import { CreateCardService } from "../../services/card/CreateCardService";

class CreateCardController {

    async handle(req: Request, res: Response) {

        const { numero, nomeProprietario, validade, ccv } = req.body;
        const userId = req.user_id;

        const createCardService: CreateCardService = new CreateCardService();
        const card = await createCardService.execute({ numero, nomeProprietario, validade, ccv, userId });

        return res.json(card)
    }
}

export { CreateCardController };

