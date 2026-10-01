# WE Library 

A simple library web application built with HTML, CSS, and JavaScript as part of **The Odin Project** JavaScript curriculum.

The project focuses on practicing **object-oriented JavaScript**, DOM manipulation, event handling, forms, and dynamically updating the page.

## Live Demo

[View the live application](https://wisdomnotai.github.io/we-library/)

## Features

* Add new books through a modal form
* Display books dynamically on the page
* Store books in a JavaScript array
* Generate a unique ID for every book
* Mark books as read or unread
* Remove books from the library
* Responsive book-card layout
* Form validation using HTML
* Modal dialog for adding books

## Built With

* HTML5
* CSS3
* JavaScript
* Git & GitHub
* GitHub Pages

## What I Learned

This project helped me practice several JavaScript concepts, including:

* JavaScript constructors
* Objects and object properties
* Prototype methods
* Arrays and array methods
* `forEach()`
* `find()`
* `findIndex()`
* `splice()`
* DOM manipulation
* Event listeners
* Form submission
* `preventDefault()`
* HTML `<dialog>` elements
* `data-*` attributes
* `crypto.randomUUID()`
* Dynamically creating and updating DOM elements

## Project Structure

```text
we-library/
├── index.html
├── style.css
└── script.js
```

## How It Works

Each book is represented as a JavaScript object created using the `Book` constructor.

```javascript
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}
```

Books are stored inside the `myLibrary` array.

When a user adds a new book, the form collects the information, creates a new `Book` object, adds it to the array, and updates the page.

## Future Improvements

Possible improvements for the project include:

* Add persistent storage with `localStorage`
* Improve the visual design
* Add animations and transitions
* Add book search and filtering
* Add book categories
* Improve accessibility
* Add more detailed book information

## Acknowledgements

Built as part of **The Odin Project** JavaScript curriculum.

## Author

**Wisdom Alawode**

GitHub: [@wisdomnotai](https://github.com/wisdomnotai)
