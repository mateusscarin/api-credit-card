import { Request, Response } from "express";
import { ValidateCardService } from "../../services/card/ValidateCardService";

class ValidateCardController {
    async handle(req: Request, res: Response) {

        const userId: string = req.user_id;
        const cardNumber: string = req.body.cardNumber;
        const cardCcv: number = req.body.cardCcv;

        const validateCardService: ValidateCardService = new ValidateCardService();
        const isValid = await validateCardService.execute(userId, cardNumber, cardCcv);

        return res.json({ "isValid": isValid });

    }
}
export { ValidateCardController };

