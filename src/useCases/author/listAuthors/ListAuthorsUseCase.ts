import { authors } from "../../../models/";

class ListAuthorsUseCase {
    
    async execute() {
        try {
            const allAuthors = await authors.find();
            return allAuthors;
        } catch (error) {
            console.error("An error occurred while loading the authors' database.:", error);
            throw error; 
        }
    }
}

export { ListAuthorsUseCase };