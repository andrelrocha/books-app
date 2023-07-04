import { authors } from "../../../models";

class ListAuthorByNameUseCase {

    async execute(name: string) {
        try {   
            const regex = new RegExp(name, "i");
            const authorsByName = await authors.find({ "name": { $regex: regex } });

            if (authorsByName.length === 0) {
                throw new Error("No authors found for the specified name!");
            }

            return authorsByName;
        } catch (err) {
            console.error(err);
            throw new Error(`Error occurred while fetching authors by name ${name}!`);
        }
    }
}

export { ListAuthorByNameUseCase };