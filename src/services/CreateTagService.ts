import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


interface ITagRequest { 
    name: string;
}

class CreateTagService { 
    async save({ name } : ITagRequest) {

        const tagsRepository = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error("Invalid Name")
        }

        const existentTag = await tagsRepository.findOne({name})

        if(existentTag){
            throw new Error("Tag already exists")
        }
        
        const tag = tagsRepository.create({
            name
        })

        tagsRepository.save(tag)

        return tag


    }
}

export {CreateTagService}