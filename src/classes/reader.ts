import { Book } from '../intefaces';

export class Reader {
    name: string = 'Anna';
    books: Book[] = [];
    take(book: Book): void {
        console.log(book);
    }
}
