function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};


const myLibrary = [];


// Add a book to the library
const addBookToLibrary = (title, author, pages, read) => {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};


// Starting books
addBookToLibrary(
    "The Hobbit",
    "J.R.R. Tolkien",
    310,
    true
);

addBookToLibrary(
    "Atomic Habits",
    "James Clear",
    320,
    false
);


// Get the library container
const libraryContainer = document.querySelector("#library");


// Display all books
const displayBooks = () => {

    // Clear the library before displaying
    libraryContainer.innerHTML = "";

    // Create a card for every book
    myLibrary.forEach((book) => {

        const bookCard = document.createElement("div");

        // Give the card the book's unique ID
        bookCard.dataset.id = book.id;

        bookCard.innerHTML = `
            <h2>${book.title}</h2>

            <p>Author: ${book.author}</p>

            <p>${book.pages} pages</p>

            <p>${book.read ? "Read" : "Not read yet"}</p>

            <button class="toggle-read" data-id="${book.id}">
                ${book.read ? "Mark as unread" : "Mark as read"}
            </button>

            <button class="remove-button" data-id="${book.id}">
                Remove
            </button>
        `;

        libraryContainer.appendChild(bookCard);
    });


    // Add functionality to the read buttons
    const readButtons = document.querySelectorAll(".toggle-read");

    readButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const bookId = event.target.dataset.id;

            const book = myLibrary.find(
                (book) => book.id === bookId
            );

            book.toggleRead();

            displayBooks();
        });
    });


    // Add functionality to the remove buttons
    const removeButtons = document.querySelectorAll(".remove-button");

    removeButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const bookId = event.target.dataset.id;

            const bookIndex = myLibrary.findIndex(
                (book) => book.id === bookId
            );

            myLibrary.splice(bookIndex, 1);

            displayBooks();
        });
    });
};


// Display the books when the page loads
displayBooks();


const newBookButton = document.querySelector("#new-book-button");

const newBookDialog = document.querySelector("#book-dialog");


// Open the dialog
newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});


// Close the dialog
const closeDialogButton = document.querySelector("#cancel-button");

closeDialogButton.addEventListener("click", () => {
    newBookDialog.close();
});


// Get the form
const bookForm = document.querySelector("#book-form");


// Handle form submission
bookForm.addEventListener("submit", (event) => {

    // Stop the browser from refreshing the page
    event.preventDefault();

    // Get the values from the form
    const title = document.querySelector("#title").value;

    const author = document.querySelector("#author").value;

    const pages = document.querySelector("#pages").value;

    const read = document.querySelector("#read").checked;


    // Create and add the new book
    addBookToLibrary(
        title,
        author,
        pages,
        read
    );


    // Display the updated library
    displayBooks();


    // Close the dialog
    newBookDialog.close();


    // Clear the form
    bookForm.reset();
});