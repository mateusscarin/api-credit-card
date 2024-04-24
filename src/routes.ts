import { Router } from "express";

import { CreateCardController } from "./controllers/card/CreateCardController";
import { ListCardsByUserController } from "./controllers/card/ListCardsByUserController";
import { ValidateCardController } from "./controllers/card/ValidateCardController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./services/user/middlewares/IsAuthenticated";

const router: Router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/card', isAuthenticated, new CreateCardController().handle);
router.post('/card/validate', isAuthenticated, new ValidateCardController().handle);
router.get('/user/cards', isAuthenticated, new ListCardsByUserController().handle);

export { router };

