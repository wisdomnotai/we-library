function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("The Hobbit", "J.R.R Tolkein", 310, true);
const book2 = new Book("Harry Potter","J.K. Rowling",310,false);
console.log(book1);
document.write(book1.title);

//creating the array for in-memory storage
const myLibrary = [];
myLibrary.push(book1);
myLibrary.push(book2);

console.log(myLibrary);