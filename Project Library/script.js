// Write a constructor for making “Book” objects. We will revisit this in the project
// at the end of this lesson. Your book objects should have the book’s title, author,
// the number of pages, and whether or not you have read the book.
const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  dispalyLibrary();
}

function dispalyLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear existing content

  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.className = ".book-card";

    const bookInfo = document.createElement("p");
    bookInfo.textContent = myLibrary[i].info();

    bookCard.appendChild(bookInfo);
    libraryDiv.appendChild(bookCard);
  }
}

//user adding new book from the web
document.getElementById("newBookBtn").addEventListener("click", () => {
  document.getElementById("bookFormContainer").classList.toggle("form-container");
});

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);
  document.getElementById("bookForm").reset();
  document.getElementById("bookFormContainer").classList.add("hidden");
});

// Example of adding a book to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("1984", "George Orwell", 328, false);

// const book1 = new Book ('Think like a man, act like a lady', 'Steve Harvey', '296', false);
// console.log(book1.info());
