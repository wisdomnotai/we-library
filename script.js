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


// Function to add a book to the library
const addBookToLibrary = (title, author, pages, read) => {
    // Create the new book inside the function
    const book = new Book(title, author, pages, read);

    // Add the new book to the myLibrary array
    myLibrary.push(book);
};


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


// Get the library container DOM
const libraryContainer = document.querySelector("#library");


// Function to display the books in the array
const displayBooks = () => {

    // Loop through the library array to create a book card
    myLibrary.forEach((book) => {

        // Create the book card
        const bookCard = document.createElement("div");

        // Give the card the book's unique ID
        bookCard.dataset.id = book.id;

        // Add the book information to the card
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not read yet"}</p>

            <button class="toggle-read" data-id="${book.id}">
                Mark as read
            </button>

            <button class="remove-button" data-id="${book.id}">
                Remove
            </button>
        `;

        // Put the card on the webpage
        libraryContainer.appendChild(bookCard);
    });
};


displayBooks();


// Function to mark a book as read/unread
const readButtons = document.querySelectorAll(".toggle-read");

readButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const bookId = event.target.dataset.id;

        const book = myLibrary.find(
            (book) => book.id === bookId
        );

        book.toggleRead();

        console.log(book.read);
    });
});


// Function to delete books
const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const bookId = event.target.dataset.id;

        const bookIndex = myLibrary.findIndex(
            (book) => book.id === bookId
        );

        myLibrary.splice(bookIndex, 1);

        console.log(myLibrary);

        const bookCard = document.querySelector(
            `[data-id="${bookId}"]`
        );

        bookCard.remove();
    });
});
//Dialog box for adding new books
const newBookButton = document.querySelector("#new-book-button")
const newBookDialog = document.querySelector("#book-dialog");

//functonality to open dialog box
newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
})

//functionality to close dialog box
const closeDialogButton = document.querySelector("#cancel-button");
closeDialogButton.addEventListener("click",() => {
    newBookDialog.close();
})

//getting the form input
bookForm = document.querySelector("#book-form");

bookForm.addEventListerner("submit", (event) =>{
    event.preventDefault();

    const title = document.querySelector("#title").values;
    const author = document.querySelector("#author").values;
    const pages = document.querySelector("#pages").values;
    const read = document.querySelector("#read").checked;

    addBookToLibrary(title,author,pages,read);

    displayBooks();
})

