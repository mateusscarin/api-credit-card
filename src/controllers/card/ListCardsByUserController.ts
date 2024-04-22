import { Request, Response } from "express";
import { ListCardsByUserService } from "../../services/card/ListCardsByUserService";

class ListCardsByUserController {
    async handle(req: Request, res: Response) {

        const user_id: string = req.user_id;

        const listCardsByUserService: ListCardsByUserService = new ListCardsByUserService();
        const cards = await listCardsByUserService.execute(user_id);

        return res.json(cards);
    }
}
export { ListCardsByUserController };

