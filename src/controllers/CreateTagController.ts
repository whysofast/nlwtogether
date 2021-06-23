import { Request, Response } from "express"
import { CreateTagService } from "../services/CreateTagService"

class CreateTagController {
    async save(request : Request, response: Response) {
        const { name } = request.body

        const createTagService = new CreateTagService();

        const tag = await createTagService.save({name})

        return response.json(tag)
    }
}

export { CreateTagController }