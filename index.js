import {Library} from './modules/library.js'
import {displayNewElement, booksList, showBooksList} from "./modules/html_functions.js";
import {addNewButtonListener, showListButtonListener, contactInfoButtonListener} from './modules/html_functions.js';
import {addNewButton, showListButton, contactInfoButton} from './modules/html_functions.js';
import {Book} from "./modules/book.js";

const library = new Library();

// Display all books when the page is loaded
if (library.books.length === 0) {
  booksList.innerHTML = `
        <p class="empty-library">No Books in the Library.</p>
      `;
} else {
  library.books.forEach((book) => {
    displayNewElement(book, library);
  });
}

// Add Event Listener on Add Book button
const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const result = library.addBook(new Book(addBookForm.elements.title.value, addBookForm.elements.author.value));
  if (result) {
    displayNewElement(result, library);
  }
  addBookForm.elements.title.value = '';
  addBookForm.elements.author.value = '';
  showBooksList();
});

showListButton.addEventListener('click', showListButtonListener);
addNewButton.addEventListener('click', addNewButtonListener);
contactInfoButton.addEventListener('click', contactInfoButtonListener);