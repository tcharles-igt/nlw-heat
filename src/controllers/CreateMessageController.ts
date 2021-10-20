import { Request, Response } from "express";
import { CreateMenssageService } from "../services/CreateMessageService";

class CreateMenssageController {
    async handle(request: Request, response: Response){
        const { message } = request.body;
        const { user_id } = request;

        const service = new CreateMenssageService();
        const result = await service.execute(message, user_id);

        return response.json(result);
    }
}

export { CreateMenssageController }