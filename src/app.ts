/* eslint-disable no-redeclare */

import { Category } from './enums';
import { logSearchResults } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ------------------------------------------------------------


// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookTitlesByCategory(1));
// console.log(calcTotalPages());

// Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
//
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20));

// Tsk 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));

// const myBooks = checkoutBooks('Ann',...[1, 2, 3]);
// console.log(myBooks);

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(true));

// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(100));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => `Damaged: ${reason}`
//     // year: 2015,
//     // copies: 3
// };
// printBook(myBook);

// Task 04.02
// const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'ann@gmail.com',
//     numBooksPublished: 3
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'Classical Literature',
//     assistCustomer(custName) {
//         console.log(custName);
//     }
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
// ref.printItem();
// console.log(ref);
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02
// const refBook = new RefBook(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// const refBook = new Encyclopedia(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');
// favoriteLibrarian.a = '';

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     email: 'anna@gmail.com',
//     title: 'TypeScript'
// };

// Task 06.05
// if (true) {
//     import('./classes').then(module => {
//         console.log(new module.Reader());
//     });
// }

// Task 06.06
// let lib: Library;
// lib = new Library();
// lib = {
//     id: 1,
//     name: 'Anna',
//     address: 'unknown'
// };
// console.log(lib);

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result = purge(inventory);
// const result = purge([1, 3]);
// console.log(result);


// Task 07.02
// interface G<T> {
//     [index: string]: (a: T) => T;
// }
//
// let g: G<number>;
// g = {
//     m1(a: number) {
//         return a;
//     },
//
//     m2(a: number) {
//         return a;
//     }
// };

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazinesShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazinesShelf.add(mag));
// console.log(magazinesShelf.getFirst());

// Task 07.03
// magazinesShelf.printTitles();
// console.log(magazinesShelf.find('Five Points'));

// console.log(getProperty(magazines[0], 'title'));

// Task 07.04
// const bool: BookRequiredFields = {
//     author: 'Ann',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown',
// };
//
// const b: UpdatedBook = {
//     id: 1,
//     author: 'Boris',
// };
// const params: Parameters<CreateCustomerFunctionType> = ['Ann'];
// createCustomer(...params);

// Task 08.01, 08.02
// const l = new UniversityLibrarian();
// l.name = 'Anna';
// console.log(l);
// l['printLibrarian']();


// Task 08.03
// const l = new UniversityLibrarian();
// l.assistFaculty = null;
// l.teachCommunity = null;
// console.log(l);

// Task 08.04
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.printItem();


// Task 08.05, 08.06
// const l = new UniversityLibrarian();
// l.name = 'Anna';
// l.assistCustomer('Boris');
// console.log(l);


// Task 08.07
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.copies = 10;
// e.copies = 0;
// e.copies = 1.1;


// Task 09.01
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

// Task 09.02
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numOfBooks => console.log(numOfBooks))
//     .catch(error => console.log(error));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(error => console.log(error));
// console.log('Finish');


// Task 09.03
console.log('Start');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log('Finish');
