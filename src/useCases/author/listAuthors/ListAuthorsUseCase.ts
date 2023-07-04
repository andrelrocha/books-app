import { authors } from "../../../models/";

class ListAuthorsUseCase {
    
    async execute(page: number, limit: number, desc: any, asc: any) {
        try {
            let order = 1;
            if (desc) order = -1;
            if (asc) order = 1;
            
            const allAuthors = await authors.find()
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ "name": order });
                
            return allAuthors;
        } catch (error) {
            console.error("An error occurred while loading the authors' database.:", error);
            throw error; 
        }
    }
}

export { ListAuthorsUseCase };