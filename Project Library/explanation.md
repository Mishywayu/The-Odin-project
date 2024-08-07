## Creatin an empty Array
const myLibrary = [];  
An empty array myLibrary is created to store the Book objects.


## Book Constructor:
Creates a new book object with the specified title, author, number of pages and read status.  
The 'info' method returns a string cntaining the book's details. 


## addBookToLibrary Function:
Takes user input for the title, author, numbe rof paes, and read status, creates a new book object, and adds it to the 'myLibrary' array using the 'PUSH METHOD'.  


# Displaying the library in the console
## displayLibrary Function: 
Loops through the myLibrary array and logs the information for each book using the info method.
 #### explaining the loop part
    for (let i = 0; i < myLibrary.length; i++) {
        ..do stuff here
    }
 * Initialization (let i = 0;): 
 The loop starts by initializing a counter variable i to 0. This variable will keep track of the current index of the array myLibrary.
* Condition (i < myLibrary.length):
Before each iteration of the loop, the condition i < myLibrary.length is checked. If this condition is true, the loop will continue; if it's false, the loop will stop.  
myLibrary.length gives the total number of elements in the myLibrary array.
* Iteration (i++):
At the end of each loop iteration, the counter variable i is incremented by 1 (i.e., i++).  
That is, the counter variable was set to [0], index 0, so with i++ it will move to index [1].

# Displaying the library on the web using cards
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

This function updates the HTML to display the books in the library:

* const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";  

  It selects the HTML element with the id library and clears its existing content.  
* It loops through each book in the myLibrary array.  

  for (let i = 0; i < myLibrary.length; i++) {   
    ..do smth    
}  
* For each book, it creates a div element with the class book-card and a p element containing the book's information.  

    const bookCard = document.createElement("div");
    bookCard.className = ".book-card";

    const bookInfo = document.createElement("p");
    bookInfo.textContent = myLibrary[i].info();  
* The book information is appended to the book-card, and then the book-card is appended to the library div.  

    bookCard.appendChild(bookInfo);
    libraryDiv.appendChild(bookCard);


## Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book:
1. ### Adding an Event Lister to a Button
document.getElementById("newBookBtn").addEventListener("click", () => {
  document.getElementById("bookFormContainer").classList.toggle("form-container");
});

* document.getElementById("newBookBtn"):   
This selects the HTML element with the ID newBookBtn.
* .addEventListener("click", ...):  
Adds an event listener that listens for a click event on the selected element.
* () => { ... }:  
This is an arrow function that will be executed when the button is clicked.
* document.getElementById("bookFormContainer"):  
Selects the HTML element with the ID bookFormContainer.
* .classList.toggle("form-container"):  
Toggles the form-container class on the bookFormContainer element.   This means if the form-container class is present, it will be removed; if it is not present, it will be added.  
This is typically used to show or hide the form.

2. ### Adding an Event Listerner to a Form
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

* document.getElementById("bookForm"):  
Selects the HTML element with the ID bookForm.
* .addEventListener("submit", (e) => { ... }):  
Adds an event listener that listens for a submit event on the selected form element.
* (e):  
This is the event object representing the event that triggered the listener.
* e.preventDefault():  
Prevents the default action of the form submission, which is to reload the page.
* const title = document.getElementById("title").value:  
Selects the input element with the ID title and gets its value.
* const author = document.getElementById("author").value:  
Selects the input element with the ID author and gets its value.
* const pages = document.getElementById("pages").value:  
Selects the input element with the ID pages and gets its value.
* const isRead = document.getElementById("isRead").checked:  
Selects the checkbox input element with the ID isRead and gets its checked status (true if checked, false if not).
* addBookToLibrary(title, author, pages, isRead):  
Calls the addBookToLibrary function with the collected values as arguments.  
This function is assumed to be defined elsewhere in the script and handles adding the new book to the library.
* document.getElementById("bookForm").reset():  
Resets the form fields to their default values.
* document.getElementById("bookFormContainer").classList.add("hidden"):  
Adds the hidden class to the bookFormContainer element, typically used to hide the form after submission.