import { books } from  "../../models/Book"

class GetBooksUseCase {
    
    async execute() {
        try{
            const result = await books.find().exec();
            console.log(result); 
            return result;
        }
        catch(err){
            console.log(err)
            throw err
        }
    }
}

export { GetBooksUseCase }