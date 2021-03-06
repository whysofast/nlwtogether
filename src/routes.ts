import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"

const router = Router()

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.save)
router.post("/tags", ensureAdmin, createTagController.save)


export { router }