import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IUserRequest { 
    name: string;
    email: string;
    admin ?: boolean
}

class CreateUserService { 
    async save({name ,email ,admin } : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Incorrect email")
        }

        const existentUser = await usersRepository.findOne({
            email
        })

        if(existentUser) {
            throw new Error("User already exists")
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user

    }
}

export {CreateUserService}