// Write a constructor for making “Book” objects. We will revisit this in the project
// at the end of this lesson. Your book objects should have the book’s title, author,
// the number of pages, and whether or not you have read the book.

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}

const book1 = new Book ('Think like a man, act like a lady', 'Steve Harvey', '296', false);

console.log(book1.info());




//loop trial
// let myLibrary = [
//     { info: () => "Book 1: JavaScript Basics" },
//     { info: () => "Book 2: Advanced JavaScript" },
//     { info: () => "Book 3: JavaScript Frameworks" }
// ];

// function loopLibrary () {
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log(myLibrary[i].info())
//     }
// }

// loopLibrary();