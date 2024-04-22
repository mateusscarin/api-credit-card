import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {

    async handle(req: Request, res: Response) {

        const { nome, email, login, senha } = req.body;

        const createUserService: CreateUserService = new CreateUserService();
        const user = await createUserService.execute({ nome, email, login, senha });

        return res.json(user)
    }
}

export { CreateUserController };

