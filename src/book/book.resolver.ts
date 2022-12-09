import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";

@Resolver(of => Book)
export class BookResolver {
    @Query(returns => [Book])
    getAllBooks() {
        return [
            {
                id: 1,
                title: 'Book A'
            },
            {
                id: 2,
                title: 'Book B'
            }
        ]
    }
}