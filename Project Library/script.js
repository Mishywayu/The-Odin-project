// Write a constructor for making “Book” objects. We will revisit this in the project
// at the end of this lesson. Your book objects should have the book’s title, author,
// the number of pages, and whether or not you have read the book.
const myLibrary = [];

function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function dispalyLibrary () {
    // for (let i = 0; i < myLibrary.length; i++) {
    //     console.log(myLibrary[i].info());
    // }

    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear existing content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const bookInfo = document.createElement('p');
        bookInfo.textContent = book.info();

        bookCard.appendChild(bookInfo);
        libraryDiv.appendChild(bookCard);
    });
}


// Example of adding a book to the library
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('1984', 'George Orwell', 328, false);

// const book1 = new Book ('Think like a man, act like a lady', 'Steve Harvey', '296', false);
// console.log(book1.info());