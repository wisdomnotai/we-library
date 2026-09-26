function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

const myLibrary = [];

const book1 = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    310,
    true
);

const book2 = new Book(
    "Atomic Habits",
    "James Clear",
    320,
    false
);

myLibrary.push(book1);
myLibrary.push(book2);

console.log(myLibrary);