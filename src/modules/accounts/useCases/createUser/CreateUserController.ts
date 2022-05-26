import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, email, password, driver_license } =
            request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        try {
            await createUserUseCase.execute({
                name,
                username,
                email,
                password,
                driver_license,
            });
        } catch (err) {
            return response.status(400).json({ Error: err.message });
        }

        return response.status(201).send();
    }
}

export { CreateUserController };
