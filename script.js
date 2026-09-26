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

console.log(myLibrary);