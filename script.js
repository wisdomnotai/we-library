function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

const myLibrary = [];


//function to add a book to the library
const addBookToLibrary =(title, author, pages, read) => {
    //create the new book inside the function
    const book = new Book(title, author, pages, read);
    //add the new book to the myLibrary Array
    myLibrary.push(book);
}

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

//get the library container DOM
const libraryContainer = document.querySelector("#library");


//function to display the books in the array
const displayBooks = () => {
    //looping through the library array to create a book card
    myLibrary.forEach((book)=>{
    //creating the book card
    const bookCard = document.createElement("div");
    bookCard.dataset.id = book.id;
    bookCard.innerHTML = `<h2>${book.title}</h2> <p>${book.author}</p> <p>${book.pages} pages</p> 
    <p>${book.read ? "Read" :"Not read yet"}</p>
    <button data-id = "${book.id}" class = "remove-button">Remove</button>`;
    libraryContainer.appendChild(bookCard);
})}

displayBooks();

//function to delete books
const removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const bookId = event.target.dataset.id;
        const book = myLibrary.find((book) => book.id ===book.id);
        const bookIndex = myLibrary.findIndex((book) => book.id === bookId);
        myLibrary.splice(bookIndex,1);
        console.log(myLibrary);
    })
});